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
   <br />
   <br />
   <br />
            <h3 className="text-center">Who we are?</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            
             <p>SnapSight© is a tool for trip organizers.</p>
 <br />
<p>All travel organizers face logistical challenges: accommodations, activities, tours, providing food, and dietary requirements -all for multiple locations!</p>
 <br />
<p>Offer your travelers more.</p>
 <br />
<p>See the world through the eyes of a locals and travel with the aim of making meaningful connections to the people that make a place special.</p>
 <br />
<p>Sort trip participants with locals.  SnapSight’s proprietary algorithm prioritizes diversity: mixing with locals and other participants.</p>
            
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
