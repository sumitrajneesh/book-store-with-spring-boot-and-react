package in.codinggyan.bookscurd;

import in.codinggyan.bookscurd.model.Books;
import in.codinggyan.bookscurd.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("")
public class BooksController {



    @Autowired private BooksService booksService;

    //save operations

    @PostMapping("/books")
    public Books saveBooks(@RequestBody Books books) {
        return booksService.saveBooks(books);
    }

    //Read operations
    @GetMapping("/books")
    public List<Books> fetchBooksList() {
        return booksService.fetchBooksList();
    }

    @CrossOrigin
    @PutMapping("/books/{id}")
    public Books updateBooks(@RequestBody Books books, @PathVariable("id") Long bookId) {
        return booksService.updateBooks(books, bookId);
    }


    @DeleteMapping("/books/{id}")
    public String deleteBooksById(@PathVariable("id") Long booksId) {
        booksService.deleteBooksById(booksId);

        return "Deleted Successfully";
    }
}
