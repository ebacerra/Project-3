import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Card from "../../components/Card";
import "./Participant.css";
import background from "./banner3.jpg";
import { FormGroup, Label, Form, FormText } from "reactstrap";

class Participant extends Component {
  state = {
    dropdownOpen: false,
    participant: [],
    firstName: "",
    lastName: "",
    role: "",
    nickName: "",
    gender: "",
    phone: "",
    birthdate: "",
    pic: ""
    // email:"",
    // password:""
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  componentDidMount() {
    this.loadParticipant();
  }

  loadParticipant = () => {
    API.getParticipants()
      .then(res =>
        this.setState({
          participant: res.data,
          firstName: "",
          lastName: "",
          role: "admin",
          nickName: "",
          gender: "female",
          phone: "",
          birthdate: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteParticipant = id => {
    API.deleteParticipant(id)
      .then(res => this.loadParticipant())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.role &&
      this.state.gender &&
      this.state.phone &&
      this.state.birthdate
    ) {
      API.createParticipant({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role: this.state.role,
        nickName: this.state.nickName,
        gender: this.state.gender,
        phone: this.state.phone,
        birthdate: this.state.birthdate
      })
        .then(res => this.loadParticipant())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="participantDiv">
          <Container
            className="participant-container"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <Row>
              <Col size="md-6" style={{ paddingTop: "20px" }}>
                <Form>
                  <h1 className="text-center">Add Participant</h1>
                  <hr />
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First name (required)"
                  />
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last name (required)"
                  />
                  <Input
                    value={this.state.nickName}
                    onChange={this.handleInputChange}
                    name="nickName"
                    placeholder="Nickname (optional)"
                  />
                  <FormGroup>
                    <Label for="pic">Upload participant photo</Label>
                    <Input type="file" name="file" />
                    <FormText color="muted"></FormText>
                  </FormGroup>
                  <div className="form-group inline">
                    Select your role:{" "}
                    <select
                      value={this.state.role}
                      onChange={this.handleInputChange}
                      name="role"
                      placeholder="Who are you?(required)"
                    >
                      <option value="admin">Admin</option>
                      <option value="local">Local</option>
                      <option value="visitor">Visitor</option>
                    </select>
                  </div>

                  <div className="form-group">
                    Select:{" "}
                    <select
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      name="gender"
                    >
                      <option className="value default selected disabled">
                        Select
                      </option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle>Select:</DropdownToggle>
                    <DropdownMenu
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      name="gender"
                      placeholder="Select Gender"
                    >
                      <DropdownItem>Female</DropdownItem>
                      <DropdownItem>Male</DropdownItem>
                      <DropdownItem>Other</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown> */}

                  <Input
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                  />

                  <FormGroup>
                    <Label for="birthdate">Date of Birth</Label>
                    <Input
                      value={this.state.birthdate}
                      onChange={this.handleInputChange}
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      placeholder="date placeholder"
                    />
                  </FormGroup>

                  {/* <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    type="email"
                    placeholder="Email (required)"
                  />

                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                  /> */}

                  <FormBtn
                    className="mt-5"
                    block
                    disabled={
                      this.state.firstName &&
                      this.state.lastName &&
                      this.state.role &&
                      this.state.gender &&
                      this.state.phone &&
                      this.state.birthdate
                    }
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </Form>
              </Col>
              <Col size="md-6 sm-12">
                {console.log(this.state.participant)}
                {this.state.participant.length ? (
                  <List>
                    {this.state.participant.map(participant => (
                      <ListItem key={participant._id}>
                        <Link to={"/participant/" + participant._id}>
                          <h1>
                            <strong>{`${participant.lastName}, ${
                              participant.firstName
                              }`}</strong>
                          </h1>
                          <h4>
                            Role:{" "}
                            <span class="badge badge-secondary">
                              {participant.role}
                            </span>
                          </h4>
                        </Link>
                        <DeleteBtn
                          onClick={() =>
                            this.deleteParticipant(participant._id)
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                    <h3 className="text-center">
                      Who is going with me?
                    <Card />
                    </h3>
                  )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Participant;
