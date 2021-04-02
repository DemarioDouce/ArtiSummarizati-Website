import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./res/css/index.css";
//Pages
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
