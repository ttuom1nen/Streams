import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Navigation = () => {
  return (
    <nav className="container mt-2 border-bottom">
      <div className="row">
        <div className="col">
          <Link to="/" className="item nav-link">
            Streamy
          </Link>
        </div>
        <div className="col">
          <Link to="" className="item nav-link">
            All Streams
          </Link>
        </div>
        <div className="col">
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
