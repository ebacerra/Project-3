import React, { Component } from "react";
import { Container, CardBody, Row, Col, Button } from "reactstrap";

class ViewRoomingButton extends Component {
  state = {};

  render() {
    const styles = {
      imageButton: {
        width: "150px",
        height: "150px",
        background: "transparent"
      }
    };

    return (
      <div>
        <Container>
          <Row>
            <Col className="md-4 mx-auto">
              <CardBody className="mb-2">
                <Button outline color="warning">
                  <h3 class="text-center mb-4">View Current Rooming</h3>
                  <img
                    onClick={() => console.log("clicked button")}
                    style={styles.imageButton}
                    alt="sort"
                    src="https://i.postimg.cc/prCZYFr4/finger-Snap-Button.png"
                  />
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewRoomingButton;
