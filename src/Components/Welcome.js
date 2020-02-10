import React from "react";
import fuel from "../img/fuel.png";

const Welcome = () => {
  return (
    <div className={"intro-img"}>
      <img
        src={fuel}
        width={"100%"}
        height={"100%"}
        alt={"fierce-archer"}
      ></img>
    </div>
  );
};

export default Welcome;
