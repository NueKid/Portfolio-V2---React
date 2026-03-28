import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../features/projects/ProjectDetail';
import { PROJECTS } from '../app/shared/PROJECTS';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = PROJECTS.find(p => p.id === projectId)
    console.log(projectId);

    return (
        <Container>
            <ProjectDetail project={project}/>
        </Container>
    )
}

export default ProjectDetailPage;
