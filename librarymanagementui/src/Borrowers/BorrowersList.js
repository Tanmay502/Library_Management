// src/Borrowers/BorrowersList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BorrowersList = () => {
    const [borrowers, setBorrowers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/library/borrowers/')
            .then(response => {
                setBorrowers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the borrowers!", error);
            });
    }, []);

    return (
        <div>
            <h2>Borrowers List</h2>
            <ul>
                {borrowers.map(borrower => (
                    <li key={borrower.id}>
                        <Link to={`/borrowers/${borrower.id}`}>{borrower.name} ({borrower.email})</Link>
                    </li>
                ))}
            </ul>
            <Link to="/borrowers/new">Add New Borrower</Link>
        </div>
    );
};

export default BorrowersList;