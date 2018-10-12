import React, { Component } from "react";
import { Redirect } from "react-router";

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  Row,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    redirectPath: ""
  };

  handleLogin = () => {
    let path = "";
    let role = "";
    // Go to the api and login .then
    // Check their role and then route to the appropriate path
    role = "admin";
    if (role === "admin") {
      path = "/about";
    } else if ((role = "user")) {
      path = "/roster";
    }

    this.setState({
      redirect: true,
      redirectPath: path
    });
  };

  componentDidMount() {
    this.setState({
      redirect: false,
      redirectPath: ""
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectPath} />;
    }

    return (
      <div className="login-container">
        <Container style={{ height: "100vh" }}>
          <Row className="d-flex justify-content-center h-100">
            <Card>
              <CardHeader>
                <h3 className="text-center">Welcome to SnapSight</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input type="select" placeholder="Select Your Login Email">
                      <option>select your login email</option>
                      <option />
                    </Input>
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key" />
                      </span>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </InputGroup>
                  <br />
                  <InputGroup className="row align-items-center text-center remember">
                    <input type="checkbox" /> <span />
                    <label>Remember me </label>
                  </InputGroup>
                  <br />
                  <div className="text-center">
                    <FormGroup>
                      <input
                        type="submit"
                        value="Login"
                        className="btn login_btn text-center"
                        onClick={this.handleLogin}
                      />
                    </FormGroup>
                  </div>
                </Form>
                <CardFooter className="text-center" color="white">
                  <p style={{ fontSize: "10px" }}>
                    Contact your travel organizer for your login.
                  </p>
                </CardFooter>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
