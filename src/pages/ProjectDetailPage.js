import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../features/projects/ProjectDetail';
import { PROJECTS } from '../app/shared/PROJECTS';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    console.log(projectId);

    return (
        <Container>
            <ProjectDetail project={PROJECTS[projectId]}/>
        </Container>
    )
}

export default ProjectDetailPage;
