package in.codinggyan.bookscurd.service;

import in.codinggyan.bookscurd.model.Books;
import in.codinggyan.bookscurd.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BooksServiceImpl implements BooksService {

    @Autowired
    private BooksRepository booksRepository;

    @Override
    public Books saveBooks(Books books) {
        return booksRepository.save(books);
    }

    @Override
    public List<Books> fetchBooksList() {
        return booksRepository.findAll();
    }

    @Override
    public Books updateBooks(Books books, Long bookId) {
        Books existingBook = booksRepository.findById(bookId).orElseThrow(RuntimeException::new);
        existingBook.setBookTitle(books.getBookTitle());
        existingBook.setBookPrice(books.getBookPrice());
        existingBook.setAuthor(books.getAuthor());
        return booksRepository.save(existingBook);
    }

    // Update operation


    public Books fetchBooksById(Long id) {
        return booksRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public void deleteBooksById(Long bookId) {
        booksRepository.deleteById(bookId);
    }
}
