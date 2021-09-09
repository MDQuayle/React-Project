import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
          color: "black",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/facts"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        Facts
      </NavLink>
      <NavLink
        to="/facts/new"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        Add A New Fact
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

export default Navbar;