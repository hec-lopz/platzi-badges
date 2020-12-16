import React, { Component } from "react";
import "./styles/PageLoading.css";
import BadgeSkeleton from "./BadgeSkeleton";
import Loader from "./Loader";

class PageLoading extends Component {
  render() {
    if (this.props.loader === true) {
      return (
        <div className="Loader__container">
          <Loader className={"BadgeForm__loader"} />
        </div>
      );
    } else {
      return (
        <div>
          {new Array(10).fill(1).map((_, i) => (
            <BadgeSkeleton key={i} />
          ))}
        </div>
      );
    }
  }
}

export default PageLoading;
