import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Participant from "./pages/Participant";
import About from "./pages/About";
import Nav from "./components/Nav";
import "./components/CardBtn/CardBtn.css";
import Roster from "./pages/Roster";
import RoomingCard from "./pages/RoomingCard";
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/participant" component={Participant} />
        <Route exact path="/roster" component={Roster} />   
        <Route exact path="/roomingcard" component={RoomingCard} />   
      </Switch>
    </div>
  </Router>
);

export default App;
