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
import "./Participant.css";

class Participant extends Component {
  state = {
    participant: [],
    firstName: "",
    lastName: "",
    role: "",
    nickName: "",
    gender: "",
    phone: "",
    birthday: ""
    // email:"",
    // password:""
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
          birthday: ""
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
      this.state.birthday
    ) {
      API.createParticipant({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role: this.state.role,
        nickName: this.state.nickName,
        gender: this.state.gender,
        phone: this.state.phone,
        birthday: this.state.birthday
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
              <Col size="md-6" stytle="padding-top: 20px">
                <form>
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
                  <div className="form-group">
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

                  <Input
                    value={this.state.nickName}
                    onChange={this.handleInputChange}
                    name="nickName"
                    placeholder="Nickname (optional)"
                  />
                  <div className="form-group">
                    Select your gender:
                    <select
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      name="gender"
                      placeholder="Select Gender"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Input
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    name="phone"
                    placeholder="Phone Number"
                  />

                  <Input
                    value={this.state.birthday}
                    onChange={this.handleInputChange}
                    name="birthday"
                    placeholder="Birthday (mm/dd/yy)"
                  />
                  {/* <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                  />

                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                  /> */}

                  <FormBtn
                    disabled={
                      !(
                        this.state.firstName &&
                        this.state.lastName &&
                        this.state.role &&
                        this.state.gender &&
                        this.state.phone &&
                        this.state.birthday
                      )
                    }
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                {console.log(this.state.participant)}
                {this.state.participant.length ? (
                  <List>
                    {this.state.participant.map(participant => (
                      <ListItem key={participant._id}>
                        <Link to={"/participant/" + participant._id}>
                          <strong>{`${participant.lastName}, ${
                            participant.firstName
                          }`}</strong>
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
                  <h3>
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
