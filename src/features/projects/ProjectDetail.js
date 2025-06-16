import { Container, Row, Col } from 'reactstrap';

const ProjectDetail = ({ project }) => {
    const { id, name, description, image, github, copy } = project

    return (
        <Container className='fluid mt-2' style={{ minHeight: '80vh', caretColor: 'transparent'}}>
            <h1>{name}</h1>
            <hr/>
            <Row className='align-items-center'>
                <Col>
                    <p>{description}</p>
                </Col>
                <Col>
                    <img src={image[0]} alt={name} className='dropImg' style={{ width: '100%', borderRadius: 10 }} />
                </Col>
            </Row>
            {copy && (
                <Row className='mt-2 align-items-center'>
                    <Col>
                        <img src={image[1]} alt={name} className='dropImg' style={{ width: '100%', borderRadius: 10  }} />
                    </Col>
                    <Col>
                        <p>{copy[0]}</p>
                    </Col>
                </Row>
            )}
            <hr />
            <Row className='align-items-center mt-4'>
                <p style={{ fontWeight: 'bold' }}>View this project on Github <i className='fa fa-github fa-lg text-light' /></p>
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
            </Row>
        </Container>
    )
}

export default ProjectDetail;
