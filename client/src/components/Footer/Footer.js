import React from "react";
import { Container, Footer } from "mdbreact";

class Footer1 extends React.Component {
  render() {
    return (
      <Footer color="blue" className="font-small pt-4 mt-4 pb-4 mb-4">
        <div className="footerbox text-center align-middle">
          <Container fluid>&copy; {new Date().getFullYear()}</Container>
        </div>
      </Footer>
    );
  }
}
export default Footer1;
