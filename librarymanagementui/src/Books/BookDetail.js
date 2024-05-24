// src/Books/BookDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/library/books/${id}/`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the book!", error);
            });
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Publication Date: {book.publication_date}</p>
            <p>{book.available ? 'Available' : 'Not Available'}</p>
        </div>
    );
};

export default BookDetail;