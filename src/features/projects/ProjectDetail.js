import { Container, Row, Col } from 'reactstrap';

const ProjectDetail = ({ project }) => {
    const { id, name, description, image, github } = project

    return (
        <Container className='fluid mt-2'>
            <h1>{name}</h1>
            <hr/>
            <Row>
                <Col>
                    <Row>
                        {description}
                    </Row>
                <br/>
                View this project on Github <i className='fa fa-github fa-lg text-light' />
                <br/>
                    <ul style={{ listStyleType: 'none'}}>
                    {github.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.url}
                                target='_blank'
                            >
                            {item.app}
                            </a>
                        </li>
                    ))}
                    </ul>
                </Col>
                <Col>
                <img src={image} alt={name} style={{ width: '100%' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetail;
