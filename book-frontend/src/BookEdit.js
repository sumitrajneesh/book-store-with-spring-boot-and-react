import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class BookEdit extends Component {

    emptyItem = {
        bookTitle: '',
        bookPrice: '',
        author: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const book = await (await fetch(`http://localhost:8080/books/${this.props.match.params.id}`)).json();
            this.setState({item: book});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    console.log(item.bookId)

    await fetch('http://localhost:8080/books' + (item.bookId ? '/' + item.bookId : ''), {
        method: (item.bookId) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
    this.props.history.push('/books');
}

    render() {
        const {item} = this.state;
        console.log(item.bookId)
        const statusTitle = <h2>{item.bookId ? 'Edit Client' : 'Add Client'}</h2>;
        console.log(statusTitle)

        return <div>
            <AppNavbar/>
            <Container>
                {statusTitle}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="bookTitle" id="bookTitle" value={item.bookTitle || ''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="text" name="bookPrice" id="bookPrice" value={item.bookPrice || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" id="author" value={item.author || ''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/books">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(BookEdit);