import React, { Component } from 'react';
import { Container, Card, CardHeader, CardBody, CardFooter, Form, Input, Row, FormGroup, InputGroup, InputGroupAddon } from 'reactstrap';
import './Login.css';

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    render() {
        return (
            <div>
                <Container style={{ height: '100vh' }}>
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
                                            <option></option>
                                        </Input>
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </InputGroupAddon>
                                        <Input type="password" className="form-control" placeholder="password" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="row align-items-center text-center remember">
                                        <input type="checkbox" /> <span></span>
                                        <label>Remember me </label>
                                    </InputGroup>
                                    <br />
                                    <div className="text-center">
                                        <FormGroup>
                                            <input type="submit" value="Login" className="btn login_btn text-center" />
                                        </FormGroup>
                                    </div>
                                </Form>
                                <CardFooter className="text-center" color="white">
                                    <p style={{ fontSize: '10px' }} >Contact your travel organizer for your login.</p>
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div >

        );
    }
}

export default Login;
