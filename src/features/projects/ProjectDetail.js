import { Container, Row, Col } from 'reactstrap';

const ProjectDetail = ({ project }) => {
    const { id, name, description, image, github } = project

    return (
        <Container className='fluid mt-2'>
            <h1>{name}</h1>
            <hr/>
            <Row className='align-items-center'>
                <Col>
                    <p>{description}</p>
                </Col>
                <Col>
                    <img src={image[0]} alt={name} style={{ width: '100%', borderRadius: 10 }} />
                </Col>
            </Row>
            <Row className='mt-2 align-items-center'>
                <Col>
                    <img src={image[1]} alt={name} style={{ width: '100%', borderRadius: 10  }} />
                </Col>
                <Col>
                    <p>Quickly and easily add books to your Reading List. 
                       Find the best online shops to purchase physical media or audio books.
                       Or read your favorite titles online with our eReader!
                    </p>
                </Col>
            </Row>
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
