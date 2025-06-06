import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

function App() {
  return (
      <div className="App bg-dark text-light">
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:projectId' element={<ProjectDetailPage />} />
          </Routes>
        <Footer />
      </div>
    );
}

export default App;
