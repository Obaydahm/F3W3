import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "./data/data.json";
import Welcome from "./components/Welcome";
import All from "./components/All";
import Details from "./components/Details";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>

        <Route path="/all" exact>
          <All data={data} />
        </Route>

        <Route path="/details/:index" exact>
          <Details data={data} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
