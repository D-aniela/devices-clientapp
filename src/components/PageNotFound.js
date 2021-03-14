import React from "react";
import { Link } from "react-router-dom";
import "./../components/PageNotFound.css";
import notFound from "./../img/notFound.png";

const PageNotFound = () => (
  <div className="notFound">
    <h2>Oops! Page not found.</h2>
    <Link className="notFoundLink" to="/">Go Home</Link>
    <img src={notFound} alt="logo" />
  </div>
);

export default PageNotFound;
