import React from "react";

const Connector = props => {
  const { round, winningRound } = props;
  const styles = {
    default: "connector",
    second: "connector-second",
    final: "connector-final"
  };

  //conditional style
  let connectorStyles = styles.default;
  if (round === winningRound) {
    connectorStyles = styles.final;
  }
  if (round === winningRound - 1) {
    connectorStyles = styles.second;
  }
  if (round === winningRound) {
    connectorStyles = styles.final;
  }
  if (winningRound === 1) {
    connectorStyles = styles.second;
  }
  return (
    <div className={connectorStyles}>
      <div className={"vertical-line-left"}></div>
      <div className={"vertical-line-right"}>
        <div className={"inner-div-top"}></div>
        <div className={"inner-div-bottom"}></div>
      </div>
    </div>
  );
};

export default Connector;
