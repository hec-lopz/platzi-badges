import React from "react";
import { Link } from "react-router-dom";
import astrounauts from "../images/astronauts.svg";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home ">
        <div className="Home__container container">
          <div className="Home__description">
            <img className="img-fluid Home__confLogo" src={confLogo} alt="" />
            <h1 className="Home__title">Print Your badges</h1>
            <p className="Home__subtitle">
              The easiest way to manage your conference
            </p>
            <Link to="/badges" className="btn btn-primary Home__btn">
              Start now
            </Link>
          </div>
          <figure className="Home__img">
            <img className="img-fluid" src={astrounauts} alt="" />
          </figure>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
