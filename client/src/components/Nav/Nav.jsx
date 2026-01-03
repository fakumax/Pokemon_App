import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export function Nav() {
  return (
    <nav className="navStyle">
      <Link
        to={{
          pathname: "https://www.google.com/",
        }}
        target="_blank" >
        
      </Link>
    </nav>
  );
}

export default Nav;