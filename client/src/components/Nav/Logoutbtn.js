
import React from 'react';
import { Button } from 'reactstrap';
import "./Logoutbtn.css";

 class Logoutbtn extends React.Component {
  render() {
    return (
      <div>
        <Button className="btn1"outline color="primary">Logout</Button>{}
   
        {/* <Button outline color="secondary">secondary</Button>{' '} */}

      </div>
    );
  }
}
export default Logoutbtn;