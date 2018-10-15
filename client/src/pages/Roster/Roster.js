import React from "react";
import Nav from "../../components/Nav";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import "./Roster.css";
import background from "./banner5.jpg";
import API from "../../utils/API";
import moment from "moment";


class Roster extends React.Component {
  state = {
    participants: []
  };

  componentDidMount() {
    API.getParticipants().then(res => {
      let participants = res.data;
      this.setState({ participants });
    });
  }

  renderParticipants = () => {
    return this.state.participants.map((participant, idx) => {
      return (
        <Card key={idx} className="mb-5 mt-5">
          <h3 className="text-center">{`${participant.lastName}, ${
            participant.firstName
            }`}</h3>
          <hr />
          <CardBody>
            <Row className="align-items-center">
              <Col
                lg="3"
                xs="3"
                className="mx-auto text-nowrap text-center px-2 mt-2 mb-2"
              >
                <CardImg
                  className="d-block mx-auto rounded-circle img-fluid"
                  src={participant.pic}
                  alt="Image of Participant"
                />
              </Col>
              <Col>
                {participant.nickName && (
                  <p style={{ display: "inline" }}>{`Nickname: ${
                    participant.nickName
                    }, `}</p>
                )}
                {participant.role && (
                  <p style={{ display: "block" }}>
                    {`Role: ${participant.role}`}{" "}
                  </p>)}
                {participant.birthdate && (
                  <p style={{ display: "block" }}>
                    {`Birthday: ${moment(participant.birthdate).format(
                      "MM/DD/YYYY"
                    )}`}{" "}
                  </p>)}



              </Col>
            </Row>
          </CardBody>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="rosterContainer">
          <Container
            className="roomingcard-container"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <Row>
              <Col className="sm">
                <Row style={{ maxHeight: 50000, maxWidth: 8000 }}>
                  <Col xs="12" md="6">
                    {this.renderParticipants()}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Roster;
