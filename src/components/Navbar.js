import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <nav>
    <Link to="/">Users</Link>
    <Link to="/tasks">Tasks</Link>
  </nav>
);

export default Navbar;
