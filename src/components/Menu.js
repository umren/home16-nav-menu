import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <nav className="menu">
      <NavLink activeClassName="menu__item-active" className="menu__item" exact to="/">Главная</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/drift">Дрифт-такси</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/timeattack">Time Attack</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/forza">Forza Karting</NavLink>
    </nav>
  );
}
