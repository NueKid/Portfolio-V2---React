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
import { link, Element } from 'react-scroll';

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
                    <NavItem >
                        <NavLink className='nav-link' to='#about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#portfolio'>
                            <i className="fa fa-list fa-lg" /> Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/resume'>
                            <i className='fa fa-file fa-lg' /> Resume
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#section1'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;