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
        <Navbar dark className='color-primary' sticky='top' expand='md'>
            <NavbarToggler onclick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <NavItem>                    
                        <i className='fa fa-home fa-lg' /> Home
                </NavItem>
            </Collapse>
        </Navbar>
    )
}

export default Header;