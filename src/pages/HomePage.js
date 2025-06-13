import { Container, Row, Col } from 'reactstrap';
import ProjectsList from '../features/projects/ProjectsList';
import About from '../features/About';
import Contact from '../features/Contact';
import Experience from '../features/Experience/Experience';
import Landing from '../features/Landing';

const HomePage = () => {
    return (
        <div className='container'>
            <Landing />
            <About />
            <ProjectsList />
            <Experience />
            <Contact />
        </div>
    )
}

export default HomePage;
