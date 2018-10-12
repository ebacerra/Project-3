import React from "react";
// import "./Footer.css";
import { Col, Container, Row, Footer } from "mdbreact";

// const Footer = () => (
//   <footer className="footer">
//     <span id="word">Flashii 2018</span>
//   </footer>
// );
class Footer1 extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      {/* <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul> */}

    </Row>
  </Container>
  <div className="footerbox">
    <Container fluid>
      &copy; {new Date().getFullYear()} 
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      Copyright:{" "}
      <a href=""> SnapSight.com </a>
      <ul class="icons">
						<li><a href="#" class="icon round fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon round fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon round fa-instagram"><span class="label">Instagram</span></a></li>
					</ul>
    </Container>
  </div>
   </Footer>
);
}
}
export default Footer1;
