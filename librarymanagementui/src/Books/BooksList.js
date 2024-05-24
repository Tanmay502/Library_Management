// src/Books/BooksList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/library/books/')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the books!", error);
            });
    }, []);

    return (
        <div>
            <h2>Books List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title} by {book.author}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/books/new">Add New Book</Link>
        </div>
    );
};

export default BooksList;