import React from "react";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import "./RoomingCard.css";
import Nav from "../../components/Nav";
import background from "./banner3.jpg";
import API from "../../utils/API";

class RoomingCard extends React.Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    API.getRooms().then(res => {
      let rooms = res.data;
      // console.log(res.data);
      this.setState({ rooms });
    });
  }

  renderRooms = () => {
    return this.state.rooms.map((room, idx) => {
      return (
        <div className="room-card" key={room.roomNumber}>
          <Col className="sm">
            <Row>
              <Col xs="12" md="6">
                <Card className="assignRoom mb-5 mt-5">
                  <CardBody style={{ maxWidth: 1000 }}>
                    <div className="room-number-container">
                      <div className="room-number">
                        <h3 className="text-center">{`Room : ${
                          room.roomNumber
                        }`}</h3>
                      </div>

                      <button
                        type="button"
                        class={`btn btn-${
                          room.gender === "male"
                            ? "primary"
                            : "warning female-badge"
                        }`}
                      >
                        Gender{" "}
                        <span class="badge badge-light">{room.gender}</span>
                      </button>
                    </div>

                    {room.participants.map(participant => (
                      <Row className="align-items-center">
                        <Col
                          lg="3"
                          xs="3"
                          className="mx-auto text-nowrap text-center px-2 mt-2 mb-2"
                        >
                          <CardImg
                            className="d-block mx-auto rounded-circle img-fluid"
                            src={participant.pic}
                            alt={`Image of${participant.firstName}`}
                          />
                        </Col>
                        <Col>
                          <p style={{ display: "inline" }}>{`${
                            participant.lastName
                          }, `}</p>
                          <p style={{ display: "inline" }}>
                            {" "}
                            {`${participant.firstName}`}{" "}
                          </p>
                        </Col>
                      </Row>
                    ))}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="rosterContainer">
          <div
            className="roomingcard-container"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <Row
              style={{
                margin: "15px"
              }}
            >
              <Col className="sm">
                <Row style={{ maxHeight: 320 }}>
                  <div className="room-cards-container">
                    {/* {console.log(this.state.rooms)} */}
                    {this.renderRooms()}
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomingCard;
