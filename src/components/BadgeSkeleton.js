import React from "react";
import "./styles/BadgeSkeleton.css";
// import confLogo from "../images/platziconf-logo.svg";
import Skeleton from "react-loading-skeleton";

const BadgeSkeleton = () => {
  return (
    <div className="BadgeSkeleton">
      <Skeleton
        circle={true}
        width={80}
        height={80}
        style={{ "margin-right": 10 }}
      />
      <div className="BadgeSkeleton__text-container">
        <p>
          <Skeleton width={"50%"} />
        </p>
        <p>
          <Skeleton width={"50%"} />
        </p>
        <p>
          <Skeleton width={"100%"} />
        </p>
        {/* <Skeleton count={3} width={100} style={{ display: "block" }} /> */}
      </div>
    </div>
  );
};

export default BadgeSkeleton;
