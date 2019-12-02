import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Container,
  Row,
  Col
  
} from 'reactstrap';
import Logo from './logo.png';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="fixed-top">
        <Container>
        <NavbarBrand href="/"><img src={Logo} alt="Logo" width="40px" /></NavbarBrand>
        <Input type="text" id="search" onKeyUp="handleSearch" placeholder="Search..." className="col-xs-3 mr-5" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-5" navbar>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="home" size={30} color='#FAFAFA' />Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="people" size={30} color='#FAFAFA' />My Network</NavLink>
            </NavItem>
            <UncontrolledDropdown className="menu" nav inNavbar>
              <DropdownToggle nav caret>
              <MaterialIcon id="icon" icon="account_box" size={30} color='#FAFAFA' />
                Me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  ACCOUNT
                </DropdownItem>
                <DropdownItem>
                  NEED HELP?
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  MANAGE ACCOUNT
                  <hr />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;