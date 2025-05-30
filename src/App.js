import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
      <div className="App bg-dark text-light">
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
      </div>
    );
}

export default App;
