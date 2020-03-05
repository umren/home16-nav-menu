import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu.js";
import TimeAttackPage from "./components/TimeAttackPage.js";
import ForzaPage from "./components/ForzaPage.js";
import DriftPage from "./components/DriftPage.js";
import HomePage from "./components/HomePage.js";


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
