import React from "react";
import "./styles/PageLoading.css";
import BadgeSkeleton from "./BadgeSkeleton";

const PageLoading = () => {
  return (
    <div>
      {new Array(10).fill(1).map((_, i) => (
        <BadgeSkeleton key={i} />
      ))}
    </div>
  );
};

export default PageLoading;
