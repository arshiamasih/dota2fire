import React from "react";
import { connect } from "react-redux";

const Team = props => {
  const { roundPosition, style, id, gameNum, name } = props;
  const winningRound = Math.log2(gameNum.n);

  //conditional styling
  let buttonStyle = style.default;
  if (id === parseInt(style.id) && name) {
    buttonStyle = style.winner;
  } else {
    buttonStyle = style.default;
  }
  return (
    <div className={"team"}>
      {roundPosition !== winningRound ? (
        <button
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={buttonStyle}
          name={name}
          onClick={props.selectWinner}
        >
          {name}
        </button>
      ) : (
        <div>
          {name ? (
            <p className={"grand-winner-text"}>Grand Winner is {name} !</p>
          ) : null}
          <button
            id={props.id}
            matchPosition={props.matchPosition}
            roundPostion={props.roundPosition}
            className={name ? "grand-winner" : buttonStyle}
            name={name}
          >
            {name}
          </button>
        </div>
      )}
    </div>
  );
};

const mapState = state => {
  return {
    gameNum: state.teams.gameNum
  };
};

export default connect(mapState)(Team);
