import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar dark className='color-primary' sticky='top' expand='md' >
            <NavbarBrand className='ms-5' href='/'>
                Ryen Masters
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className='ms-auto' navbar>
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
                    <NavItem>
                        <Link 
                            className='nav-link' 
                            to='resume'
                            active 
                            spy={true}
                            hashSpy={true} 
                            smooth={true} 
                            duration={500} 
                            offset={-75} 
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                            >
                            <i className='fa fa-file fa-lg' /> Resume
                        </Link>
                    </NavItem>
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
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;