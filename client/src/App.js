import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Participant from "./pages/Participant";
import About from "./pages/About";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./components/CardBtn/CardBtn.css";
// import Roster from "./pages/Roster";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/participant" component={Participant} />
        {/* <Route exact path="/roster" component={Roster} />    */}
      </Switch>
    </div>
  </Router>
);

export default App;
