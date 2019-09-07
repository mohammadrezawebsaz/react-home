import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <a href="www.google.com" target="blank">خانه</a>
        <a href="www.google.com" target="blank">محصولات</a>
        <a href="www.google.com" target="blank">ثبت سفارش</a>
        <a href="www.google.com" target="blank">تماس با ما</a>
      </div>
    );
  }
}

export default Menu;
