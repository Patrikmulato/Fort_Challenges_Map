import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class AppNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <NavbarBrand href="/" className="mx-auto">Fortnite Küldetések</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink style={{color: 'grey'}}>
                                Donate
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;