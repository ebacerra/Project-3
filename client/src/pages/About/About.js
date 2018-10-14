import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./About.css";
import Carousel from "./Carousel.js";

const About = () => (
  <div>
    <Nav />
    <div className="carouseldisplay">
      <Carousel style={{ marginTop: 0 }} />
      <h1 className="text-center">SnapSight</h1>
      <Container style={{ marginTop: 0 }}>
        <Row>
          <Col size="md-12">
            <br />
            <h3 className="text-center">Who we are?</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="footer">
        {" "}
        <Footer />
      </div>
    </div>
  </div>
);

export default About;
