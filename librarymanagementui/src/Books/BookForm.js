// src/Books/BookForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BookForm.css';

const BookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        publication_date: '',
        available: true,
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/library/books/${id}/`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the book!", error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://127.0.0.1:8000/library/books/${id}/`, formData)
                .then(response => {
                    navigate('/books');
                });
        } else {
            axios.post('http://127.0.0.1:8000/library/books/', formData)
                .then(response => {
                    navigate('/books');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Author:
                <input type="text" name="author" value={formData.author} onChange={handleChange} />
            </label>
            <label>
                ISBN:
                <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} />
            </label>
            <label>
                Publication Date:
                <input type="date" name="publication_date" value={formData.publication_date} onChange={handleChange} />
            </label>
            <label>
                Available:
                <input type="checkbox" name="available" checked={formData.available} onChange={() => setFormData({ ...formData, available: !formData.available })} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;