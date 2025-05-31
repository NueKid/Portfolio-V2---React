import { Container, Row, Col } from 'reactstrap';
import ProjectsList from '../features/projects/PorjectsList';
import About from '../features/About';

const HomePage = () => {
    return (
        <div className='container'>
        <About />
        <ProjectsList />
        </div>
    )
}

export default HomePage;
