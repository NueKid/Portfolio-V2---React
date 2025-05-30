import { Container, Row, Col } from 'reactstrap';
import { PROJECTS } from '../app/shared/PROJECTS';
import ProjectCard from '../features/projects/ProjectCard';

const HomePage = () => {
    return (
        <div className='container'>
        <ProjectCard project={PROJECTS[0]} />
        </div>
    )
}

export default HomePage;
