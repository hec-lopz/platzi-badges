import React from "react";
import "./styles/PageError.css";
import header from "../images/badge-header.svg";
import emoji from "../images/scared.svg";

const PageError = (props) => {
  return (
    <React.Fragment>
      <div className="PageError">
        <div className="PageError__container">
          <div className="PageError__header">
            <img src={header} alt="" />
          </div>
          <div className="PageError__description">
            <h1 className="PageError__error">{props.error.message}</h1>
            <hr />
            <img className="PageError__emoji" src={emoji} alt="" srcset="" />
            <hr />
            <p className="PageError__message font-weight-bold">
              ¡Something happened! We are working to fix this.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PageError;
