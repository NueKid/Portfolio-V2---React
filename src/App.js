import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Header from './components/Header';
import { PROJECTS } from './app/shared/PROJECTS';
import ProjectCard from './features/projects/ProjectCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectCard project={PROJECTS[0]} />
      Hello Portfolio!
    </div>
  );
}

export default App;
