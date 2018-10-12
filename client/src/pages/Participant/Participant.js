import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Select } from "../../components/Form";
import Card from "../../components/Card";



const styles = {
  }


class Participant extends Component {
  state = {
    participant: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadParticipant();
  }

  loadParticipant = () => {
    API.getParticipants()
      .then(res =>
        this.setState({
          participant: res.data,
          title: "",
          author: "",
          synopsis: ""
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
    if (this.state.title && this.state.author) {
      API.saveParticipant({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadParticipant())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6" stytle="padding-top: 20px">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            <form>
              <Input
                value={this.state.firstname}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First name (required)"
              />
              <Input
                value={this.state.lasttname}
                onChange={this.handleInputChange}
                name="lasttname"
                placeholder="Last name (required)"
              />
              <Input
                value={this.state.whoareyou}
                onChange={this.handleInputChange}
                name="whoareyou"
                placeholder="Who are you?(required)"
              />

              <Input
                value={this.state.Nickname}
                onChange={this.handleInputChange}
                name="Nickname"
                placeholder="Nickname (optional)"
              />
              <Input
                value={this.state.Selectgender}
                onChange={this.handleInputChange}
                name="Selectgender"
                placeholder="Select Gender"
              />

              <Input
                value={this.state.Phonenumber}
                onChange={this.handleInputChange}
                name="Phonenumber"
                placeholder="Phone Number"
              />

              <Input
                value={this.state.Birthday}
                onChange={this.handleInputChange}
                name="Birthday"
                placeholder="mm/dd/yy"
              />
              <Input
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
              />

              <FormBtn
                disabled={!(this.state.firstname && this.state.lastname)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>


            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/*  */}

            {console.log(this.state.participant)}
            {this.state.participant.length ? (
              <List>
                {this.state.participant.map(participant => (
                  <ListItem key={participant._id}>
                    <Link to={"/participant/" + participant._id}>
                      <strong>{participant.firstName}</strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteBook(participant._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>
                Who is going with me?
                <Card />
                <Card />
                {/* <FormBtn
                  disabled={!(this.state.firstname && this.state.lastname)}
                  onClick={this.handleFormSubmit}
                >
                  Join
                </FormBtn> */}
              </h3>
            )}
          </Col>
        </Row>
      </Container>



    );
  }
}

export default Participant;
