import { PROJECTS } from "../../app/shared/PROJECTS";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "reactstrap";

const ProjectsList = () => {
    return (
        <Container className="fluid mt-2">
            <h1 id='portfolio'>Portfolio</h1>
            <Row>
                {PROJECTS.map((project) => (
                    <Col 
                        md='4'
                        key={project.id}
                        className="m-6 d-flex justify-content-center"
                    >
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectsList;