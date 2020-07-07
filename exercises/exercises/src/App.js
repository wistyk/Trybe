import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import BasicOp from "./components/BasicOperations";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/4.1" component={BasicOp} />
        <Link to="/4.1">JS Básico</Link>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
