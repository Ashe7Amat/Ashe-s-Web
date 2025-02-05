import * as React from "react";
import "./header.css";
import logo from "../../assets/images/Ashe-logo.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/moments">Moments</Link>
        <Link to="/contacte">Contacte</Link>
      </nav>
    </header>
  );
}
