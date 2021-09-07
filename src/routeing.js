import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Home from "./home";
export default function BasicExample() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }