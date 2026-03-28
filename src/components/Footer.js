import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import { useLocation, NavLink } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname ==='/';

    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='text-light'>
                    <h5>Links</h5>
                    <ul className='list-unstyled text-light'>
                        {!isHomePage && (
                            <li>
                                <NavLink 
                                    className='text-light' 
                                    to='/'
                                    style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >
                                    Back to Home
                                </NavLink>
                            </li>
                        )}
                        {isHomePage && (
                            <li>
                                <Link 
                                    className='text-light' 
                                    to='about'
                                    active
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-75}
                                    style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >About
                                </Link>
                            </li>
                        )}
                        {isHomePage && (
                            <li>
                                <Link 
                                    className='text-light' 
                                    to='portfolio'
                                    active
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-75}
                                    style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >Portfolio
                                </Link>
                            </li>
                        )}
                        {isHomePage && (
                            <li>
                                <Link 
                                    className='text-light' 
                                    to='resume'
                                    active
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-75}
                                    style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >Resume
                                </Link>
                            </li>
                        )}
                        {isHomePage && (
                            <li>
                                <Link 
                                    className='text-light' 
                                    to='contact'
                                    active
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-75}
                                    style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >Contact
                                </Link>
                            </li>
                        )}
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