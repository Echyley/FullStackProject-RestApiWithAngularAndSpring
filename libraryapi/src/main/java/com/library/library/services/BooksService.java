package com.library.library.services;

import com.library.library.exceptions.ResourceNotFoundException;
import com.library.library.model.Books;
import com.library.library.repositories.BooksRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class BooksService {
    
    private final Logger logger = Logger.getLogger(BooksService.class.getName());

    @Autowired
    BooksRepository repository;

    //Find All
    public List<Books> findAll() {
        logger.info("Finding all books!");

        return repository.findAll();
    }

    //Create
    public Books create(Books book) {
        logger.info("Creating a book!");

        return repository.save(book);
    }

    //Read
    public Books findById(Long id) {
        logger.info("Finding a book!");
        return repository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("No records found for thid id"));
     }

    //Update
    public Books update(Books book) {
        logger.info("Updating a book");

        var entity = repository.findById(book.getId())
            .orElseThrow(() -> new ResourceNotFoundException("No records found for this id"));
        entity.setTitle(book.getTitle());
        entity.setGenre(book.getGenre());
        entity.setSize(book.getSize());

        return repository.save(entity);
    }

    //Delete
    public void delete(Long id) {
        logger.info("Deleting a book!");

        var entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("No records found for thid id"));

        repository.delete(entity);
    }
}
