import { PROJECTS } from "../../app/shared/PROJECTS";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "reactstrap";

const ProjectsList = () => {
    return (
        <Container className="fluid mt-2">
            <h1 id='portfolio'>Portfolio</h1>
            <hr />
            <Row>
                {PROJECTS.map((project) => (
                    <Col 
                        md='4'
                        key={project.id}
                        className='mt-2 fluid d-flex justify-content-center align-items-center'
                    >
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    )
}

export default ProjectsList;