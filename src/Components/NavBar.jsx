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
      <Navbar color="dark" dark expand="md" className="fixed-top" id="main-nav">
        <Container id="nav-container">
        <NavbarBrand href="/"><img src={Logo} alt="Logo" width="30px" className="logo" /></NavbarBrand>
        <Input type="text" id="search" onKeyUp="handleSearch" placeholder="Search..." className="col-xs-3 mr-5" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-5" navbar>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon icon="home" id="icon" size={20} color='#FAFAFA' /> <span className="nav-name">Home</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="people" size={20} color='#FAFAFA' /> <span className="nav-name">My Network</span></NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon icon="work" id="icon" size={20} color='#FAFAFA' /> <span className="nav-name">Jobs</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="message" size={20} color='#FAFAFA' /> <span className="nav-name">Messaging</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="notifications" size={20} color='#FAFAFA' /> <span className="nav-name">Notifications</span></NavLink>
            </NavItem>

            <UncontrolledDropdown className="menu" nav inNavbar>
              <DropdownToggle nav caret>
              <MaterialIcon id="icon" icon="account_box" size={20} color='#FAFAFA' />
              <span className="nav-name">Me</span>
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

            <UncontrolledDropdown className="menu" nav inNavbar>
              <DropdownToggle nav caret>
              <MaterialIcon id="icon" icon="apps" size={20} color='#FAFAFA' />
              <span className="nav-name">Work</span>
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

            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="assignment" size={20} color='#FAFAFA' /> <span className="nav-name">Post a job</span></NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;