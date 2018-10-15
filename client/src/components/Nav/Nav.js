import React from "react";
import { Redirect } from "react-router";
import "./Nav.css";
import { Nav, NavItem, NavLink, Button } from "reactstrap";

class Nav1 extends React.Component {
  state = {
    dropdownOpen: false,
    redirect: false
  };

  handleLogout = () => {
    // call api to logout, THEN set the state to true
    this.setState({ redirect: true });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const styles = {
      text: {
        fontSize: "20px",
        color: "black",
        backgroundColor: "white"
      },
      navbar: {
        marginBottom: "35px",
        backgroundColor: "white"
      }
    };

    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <div class="navbar fixed-top" style={styles.navbar}>
        <Nav tabs>
          <NavItem className="text">
            <NavLink style={styles.text} Disable href="/">
              SnapSight
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/about">
              About
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
          {/* <NavItem>
            <NavLink style={styles.text} href="/newsfeed">
              Newsfeed
            </NavLink> */}
          {/* </NavItem> */} 
          <NavItem>
            <NavLink style={styles.text} href="/participant">
              Participant
            </NavLink>
          </NavItem>
          <NavItem>
            <Button
              onClick={this.handleLogout}
              className="btn1"
              outline
              color="primary"
            >
              Logout
            </Button>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Nav1;
