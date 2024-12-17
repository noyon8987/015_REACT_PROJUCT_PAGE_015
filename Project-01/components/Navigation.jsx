import React from "react";

export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src="../Project-01/image/brand_logo.png" />
      </div>

      <ul className="nav-list">
        <li className="nav-link">MENU</li>
        <li className="nav-link">LOCATION</li>
        <li className="nav-link">ABOUT</li>
        <li className="nav-link">CONTACT</li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
  );
}
