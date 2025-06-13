import { Container, Row, Col } from 'reactstrap'

const Landing = () => {
    return (
        <Container className='text-start mt-4'>
            <Row className='align-items-center' style={{ height: '90vh'}}>
                <p 
                    className='text-info fw-bold'
                    >
                        Hello! My name is
                        <br/> 
                        <span className='fw-bold text-light' style={{ fontSize: 56}}>
                            Ryen Masters
                        </span>
                        <br />
                        <span className='fw-bold' style={{ fontSize: 56}}>A full-stack developer with a passion for innovation.</span>
                        <br />
                        <br />
                        <span className='fw-bold text-light'>I am a Full-stack Software Engineer specializing in developing remarkable experiences with front-end finesse and back-end brilliance.</span>
                </p>
            </Row>
            <hr />
        </Container>
    )
}

export default Landing;
