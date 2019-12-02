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
  Container
  
} from 'reactstrap';
import Logo from './logo.png';
import '../index.css'

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
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">My Network</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
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