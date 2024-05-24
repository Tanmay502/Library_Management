// src/Borrowers/BorrowerForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BorrowerForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/library/borrowers/${id}/`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the borrower!", error);
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
            axios.put(`http://127.0.0.1:8000/library/borrowers/${id}/`, formData)
                .then(response => {
                    navigate('/borrowers');
                });
        } else {
            axios.post('http://127.0.0.1:8000/library/borrowers/', formData)
                .then(response => {
                    navigate('/borrowers');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default BorrowerForm;