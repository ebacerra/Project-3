import React from "react";
import Logoutbtn from "./Logoutbtn";
import "./Nav.css";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

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
    const styles = {
      text: {
        fontSize: "20px",
        color: "black"
      },
      navbar: {
        // backgroundColor: "#ffc312",
        marginBottom: "35px"
      }
    };

    return (
      <div class="navbar" style={styles.navbar}>
        <Nav tabs>
          <NavItem className="text">
            <NavLink style={styles.text} Disable href="/">
              SnapSight
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/about">
              Newsfeed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/roomingcard">
              Rooming
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/roster">
              Roster
            </NavLink>
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
              <DropdownItem href="/participant">
                Add a New Participant
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Logoutbtn />
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
