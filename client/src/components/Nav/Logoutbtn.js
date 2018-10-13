import React from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import "./Logoutbtn.css";

class Logoutbtn extends React.Component {
  state = {
    redirect: false
  };

  handleLogout = () => {
    // call api to logout, THEN set the state to true
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <div>
        <Button
          onClick={this.handleLogout}
          className="btn1"
          outline
          color="primary"
        >
          Logout
        </Button>
        {}

        {/* <Button outline color="secondary">secondary</Button>{' '} */}
      </div>
    );
  }
}
export default Logoutbtn;
