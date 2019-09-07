import React, { Component } from "react";
import "./Navbar.css";
import Menu from "./Menu";
import Time from "./Time";

class Navbar extends Component {
  render() {
    return (
      <div className="navbarMain">
        <Time />
        <Menu />
      </div>
    );
  }
}
export default Navbar;
