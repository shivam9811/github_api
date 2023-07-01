import React from "react";
import Main from "../components/helpers/Main";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Main>
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="text-8xl font-bold mb-8">Opps!!</h1>
            <p className="text-5xl mb-8">404 - Page not found!</p>
            <Link className="btn btn-primary btn-lg" to="/">
              <FaHome className="mr-2"></FaHome>
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ErrorPage;
