package in.codinggyan.bookscurd;

import in.codinggyan.bookscurd.model.Books;
import in.codinggyan.bookscurd.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/")
public class BooksController {



    @Autowired private BooksService booksService;

    //save operations
    @CrossOrigin(origins = "*")
    @PostMapping("/books")
    public Books saveBooks(@RequestBody Books books) {
        return booksService.saveBooks(books);
    }

    //Read operations
    @CrossOrigin(origins = "*")
    @GetMapping("/books")
    public List<Books> fetchBooksList() {
        return booksService.fetchBooksList();
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/books/{id}")
    public Books updateBooks(@RequestBody Books books, @PathVariable("id") Long bookId) {
        return booksService.updateBooks(books, bookId);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/books/{id}")
    public Books fetchBooksById(@PathVariable("id") Long id) {
        return booksService.fetchBooksById(id);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/books/{id}")
    public String deleteBooksById(@PathVariable("id") Long booksId) {
        booksService.deleteBooksById(booksId);

        return "Deleted Successfully";
    }
}
