import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='text-light'>
                    <h5>Links</h5>
                    <ul className='list-unstyled text-light'>
                        <li>
                            <Link className='text-light' to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/resume'>Resume</Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    </Col>
                    <Col xs='6' className='text-center'>
                        <h5>Social</h5>
                        <a 
                            className='btn btn-social-icon'
                            href='https://www.linkedin.com/in/ryenmasters/'
                            target='_blank'
                        >
                            <i className='fa fa-linkedin text-light' />
                        </a>
                        <a 
                            className='btn btn-social-icon'
                            href='https://github.com/NueKid/'
                            target='_blank'
                        >
                            <i className='fa fa-github text-light' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;