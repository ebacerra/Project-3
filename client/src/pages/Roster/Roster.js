import React from "react";
import Nav from "../../components/Nav";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import "./Roster.css";
import background from "./banner5.jpg";

const Roster = props => {
  return (
    <div>
      <Nav />
      <div className="rosterContainer">
        <Container
          className=".roster-container "
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Row>
            <Col className="sm">
              <Row style={{ maxWidth: 1000 }}>
                <Col xs="3" />
                <Col xs="auto">
                  <Card className="mb-5 mt-5">
                    <CardBody className="rosterCard">
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
                          <p>Last Name,</p>
                          <p style={{ display: "inline" }}> First Name </p>
                        </Col>
                        <Col xs="3" />
                      </Row>
                      <Row>
                        <Col />
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

export default Roster;
