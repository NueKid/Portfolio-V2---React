import { PROJECTS } from "../../app/shared/PROJECTS";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "reactstrap";
import { Element } from "react-scroll";

const ProjectsList = () => {
    return (
        <Element name='portfolio'>
            <Container className="fluid mt-2" style={{ caretColor: 'transparent'}}>
                <h1 id='portfolio'>Portfolio</h1>
                <hr />
                <Row className='my-4'>
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
        </Element>
    )
}

export default ProjectsList;