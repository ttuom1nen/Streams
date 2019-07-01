import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/" className="item nav-link">
        Streamy
      </Link>
      <Link to="" className="item nav-link">
        All Streams
      </Link>
      <GoogleAuth />
    </nav>
  );
};

export default Navigation;
