import React from "react";
import loading from "../img/loading.png";

const Loading = () => {
  return (
    <div className={"loading-spinner"}>
      <h3 style={{ color: "gray" }}>Loading...</h3>
      <img
        src={loading}
        width={"100px"}
        height={"100px"}
        alt={"api-loading"}
      ></img>
    </div>
  );
};

export default Loading;
