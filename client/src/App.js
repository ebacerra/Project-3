import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Participant from "./pages/Participant";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Participant} />
        <Route exact path="/Participant" component={Participant} />
      </Switch>
    </div>
  </Router>
);

export default App;
