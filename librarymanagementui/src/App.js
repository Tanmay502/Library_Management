import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetail from './Books/BookDetail';
import BookForm from './Books/BookForm';
import BooksList from './Books/BooksList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id/edit" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
