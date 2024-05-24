import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BooksList from './Books/BooksList';
import BookDetail from './Books/BookDetail';
import BookForm from './Books/BookForm';
import BorrowersList from './Borrowers/BorrowersList';
import BorrowerDetail from './Borrowers/BorrowerDetail';
import BorrowerForm from './Borrowers/BorrowerForm';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/new" element={<BookForm />} />
        <Route path="/books/:id/edit" element={<BookForm />} />
        <Route path="/borrowers" element={<BorrowersList />} />
        <Route path="/borrowers/:id" element={<BorrowerDetail />} />
        <Route path="/borrowers/new" element={<BorrowerForm />} />
        <Route path="/borrowers/:id/edit" element={<BorrowerForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);