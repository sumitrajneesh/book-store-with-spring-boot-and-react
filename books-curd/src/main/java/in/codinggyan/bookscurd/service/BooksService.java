package in.codinggyan.bookscurd.service;

import in.codinggyan.bookscurd.model.Books;

import java.util.List;

public interface BooksService {

    //save Opeartion
    Books saveBooks(Books books);

    //Read operation

    List<Books> fetchBooksList();

    //Update operation

    Books updateBooks(Books books, Long bookId);

    Books fetchBooksById(Long bookId);

    // Delete operation
    void deleteBooksById(Long bookId);

}
