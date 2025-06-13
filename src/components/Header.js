import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <Navbar dark className='color-primary' sticky='top' expand='md' >
            <NavbarBrand className='ms-5' href='/'>
                Ryen Masters
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className='ms-auto' navbar>
                {!isHomePage && (
                    <NavItem>
                        <NavLink className='nav-link' to='/' style={{ caretColor: 'transparent'}}>
                            <i className='fa fa-home fa-lg' /> Back to Home
                        </NavLink>
                    </NavItem>
                )}
                {isHomePage && (
                    <NavItem>
                        <Link 
                            className='nav-link'
                            to='about'
                            active
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={500}
                            offset={-75}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                            >
                            <i className='fa fa-info fa-lg' /> About
                        </Link>
                    </NavItem>
                )}
                {isHomePage && (
                    <NavItem>
                        <Link 
                            className='nav-link' 
                            to='portfolio'
                            active 
                            spy={true}
                            hashSpy={true}
                            smooth={true} 
                            duration={500} 
                            offset={-75} 
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                            >
                            <i className="fa fa-list fa-lg" /> Portfolio
                        </Link>
                    </NavItem>
                )}
                {isHomePage && (
                    <NavItem>
                        <Link 
                            className='nav-link' 
                            to='experience'
                            active 
                            spy={true}
                            hashSpy={true} 
                            smooth={true} 
                            duration={500} 
                            offset={-75} 
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                            >
                            <i className='fa fa-file fa-lg' /> Experience
                        </Link>
                    </NavItem>
                )}
                {isHomePage && (
                    <NavItem>
                        <Link 
                            className='nav-link' 
                            to='contact'
                            active
                            spy={true}
                            hashSpy={true}
                            smooth={true} 
                            duration={500} 
                            offset={-75} 
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                            >
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </Link>
                    </NavItem>
                )}
                {isHomePage && (
                <NavItem>
                    <Button 
                        href={process.env.PUBLIC_URL + '/Resume.pdf'}
                        tag='a'
                        target='_blank'
                        color='info' 
                        className='text-light'
                        style={{ caretColor: 'transparent'}}
                        >
                        Resume
                    </Button>
                </NavItem>
                )}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;