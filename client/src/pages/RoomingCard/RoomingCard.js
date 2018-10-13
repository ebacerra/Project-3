import React from "react";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import "./RoomingCard.css";
import Nav from "../../components/Nav";
import background from "./banner3.jpg";

const RoomingCard = props => {
  return (
    <div>
      <Nav />
      <div className="app-container">
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
              <Row style={{ maxHeight: 320, maxWidth: 1000 }}>
                <Col xs="12" md="6">
                  <Card body inverse color="info" className="mb-5 mt-5">
                    <h3 className="text-center">Room #</h3>
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
                            src="http://api.randomuser.me/portraits/women/73.jpg"
                            alt="Image of Participant"
                          />
                        </Col>
                        <Col>
                          <p style={{ display: "inline" }}>Last Name,</p>
                          <p style={{ display: "inline" }}> First Name </p>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col
                          lg="3"
                          xs="3"
                          className="mx-auto text-nowrap text-center px-2 mt-2 mb-2"
                        >
                          <CardImg
                            className="d-block mx-auto rounded-circle img-fluid"
                            src="http://api.randomuser.me/portraits/women/73.jpg"
                            alt="Image of Participant"
                          />
                        </Col>
                        <Col>
                          <p style={{ display: "inline" }}>Last Name,</p>
                          <p style={{ display: "inline" }}> First Name </p>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col
                          lg="3"
                          xs="3"
                          className="mx-auto text-nowrap text-center px-2 mt-2 mb-2"
                        >
                          <CardImg
                            className="d-block mx-auto rounded-circle img-fluid"
                            src="http://api.randomuser.me/portraits/women/73.jpg"
                            alt="Image of Participant"
                          />
                        </Col>
                        <Col>
                          <p style={{ display: "inline" }}>Last Name,</p>
                          <p style={{ display: "inline" }}> First Name </p>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col
                          lg="3"
                          xs="3"
                          className="mx-auto text-nowrap text-center px-2 mt-2 mb-2"
                        >
                          <CardImg
                            className="d-block mx-auto rounded-circle img-fluid"
                            src="http://api.randomuser.me/portraits/women/73.jpg"
                            alt="Image of Participant"
                          />
                        </Col>
                        <Col>
                          <p style={{ display: "inline" }}>Last Name,</p>
                          <p style={{ display: "inline" }}> First Name </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RoomingCard;
