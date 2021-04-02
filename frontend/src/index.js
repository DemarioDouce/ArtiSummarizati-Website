import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./res/css/index.css";
//Pages
import App from "./App";
import Results from "./pages/Results";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/results" component={Results} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
