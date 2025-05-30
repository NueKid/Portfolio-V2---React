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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar dark className='color-primary' sticky='top' expand='md' >
            <NavbarBrand className='ms-5' href='/'>
                Ryen Masters
            </NavbarBrand>
            <NavbarToggler onClick={() => isOpen(!setIsOpen)} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className='ms-auto' navbar>
                    <NavItem >
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/browse'>
                            <i className='fa fa-list fa-lg' /> Browse
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/ReadingListDirectory'>
                            <i className='fa fa-book fa-lg' /> Reading List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;