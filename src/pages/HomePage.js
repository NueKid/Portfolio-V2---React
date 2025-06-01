import { Container, Row, Col } from 'reactstrap';
import ProjectsList from '../features/projects/PorjectsList';
import About from '../features/About';
import Contact from '../features/Contact';

const HomePage = () => {
    return (
        <div className='container'>
        <About />
        <ProjectsList />
        <Contact />
        </div>
    )
}

export default HomePage;
