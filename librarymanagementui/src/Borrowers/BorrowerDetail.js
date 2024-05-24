// src/Borrowers/BorrowerDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BorrowerDetail = () => {
    const { id } = useParams();
    const [borrower, setBorrower] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/library/borrowers/${id}/`)
            .then(response => {
                setBorrower(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the borrower!", error);
            });
    }, [id]);

    if (!borrower) return <div>Loading...</div>;

    return (
        <div>
            <h2>{borrower.name}</h2>
            <p>Email: {borrower.email}</p>
            <h3>Borrowed Books:</h3>
            <ul>
                {borrower.borrowed_books.map(book => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BorrowerDetail;