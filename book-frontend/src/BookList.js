import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/books')
            .then(response => response.json())
            .then(data => this.setState({books: data}));
    }

    async remove(id) {
        await fetch(`http://localhost:8080/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedBooks = [...this.state.books].filter(i => i.id !== id);
            this.setState({books: updatedBooks});
            
        });
        this.props.history.push('/');
    }

    render() {
        const {books} = this.state;

        const BookList = books.map(book => {
            return <tr key={book.bookId}>
                <td style={{whiteSpace: 'nowrap'}}>{book.bookTitle}</td>
                <td>{book.bookPrice}</td>
                <td>{book.author}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/books/" + book.bookId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(book.bookId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/books/new">Add Books</Button>
                    </div>
                    <h3>Books</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Title</th>
                            <th width="30%">Price</th>
                            <th width="30%">Author</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {BookList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default BookList;