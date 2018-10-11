import React from "react";
// import "./Nav.css";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class Nav1 extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  
    render() {
      return (
        <div>
          <Nav tabs>
          <NavItem>
              <NavLink disabled href="#">Flashii</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Newsfeed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Rooming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Roster</NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                Add
              </DropdownToggle>
              <DropdownMenu>
                {/* <DropdownItem header>Newsfeed</DropdownItem>
                <DropdownItem disabled>Rooming</DropdownItem>
                <DropdownItem>Roster</DropdownItem>
                <DropdownItem divider /> */}
                <DropdownItem>Add a New Participant</DropdownItem>
              </DropdownMenu>
            </Dropdown>




            
          </Nav>
         
        </div>
      );
    }
  }

//   // <nav>

//   //     <div className="navbar" id="navbargroup" herf="/">
//   //     <div className="logoname">
//   //     <p id="logo">
//   //     Flashii
//   //   </p>

//   //     </div>
    
  
//   //     <a href="#">Newsfeed</a>
//   //     <a href="#">Rooming</a>  
//   //     <a href="#">Roster</a>  
  
//   //         <a href="#">Add New Participant</a>  
//   //         <button type="button" class="btn btn-outline-primary">Logout</button>    

//   // </div>

// </nav>

export default Nav1;
;
