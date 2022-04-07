package in.codinggyan.bookscurd.repository;

import in.codinggyan.bookscurd.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books, Long> {
}
