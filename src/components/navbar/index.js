import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/orders">
        Orders
      </NavLink>
    </div>
  );
}

export default Navbar;
