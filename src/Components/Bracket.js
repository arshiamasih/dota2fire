import React from "react";
import Round from "./Round";
import Ruler from "./Ruler";
import Loading from "./Loading";
import { connect } from "react-redux";
import { matchPadding } from "../helpers";

const Bracket = props => {
  const { apiStatus, gameNum } = props;
  const key = gameNum.n;

  const createRounds = n => {
    const numRounds = Math.log2(n);
    let matchCalculation = n / 2;
    const teams = [...props.teams.teams];
    const winner = { ...props.winner };
    const matches = [...Array(numRounds)].reduce((match, el, i) => {
      if (i === 0) match[i] = teams;
      else match[i] = Object.values(winner[i]["matches"]);
      return match;
    }, {});

    return [...Array(numRounds)].map((_, i) => {
      return (
        <div>
          {i === numRounds - 1 ? (
            <p style={{ color: "rgb(190, 189, 189)", fontSize: "14px" }}>
              winner
            </p>
          ) : (
            <p style={{ color: "gray", fontSize: "14px" }}>round {i + 1}</p>
          )}
          <Round
            key={i}
            teams={null}
            roundPosition={i}
            matches={matches[i]}
            padding={matchPadding[key][i]}
            gameNum={props.gameNum}
            numMatches={Math.ceil((matchCalculation /= 2))}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className={gameNum.n < 8 ? "small-bracket" : "bracket"}>
        {apiStatus.teams === "success" ? (
          createRounds(gameNum.num)
        ) : (
          <Loading />
        )}
      </div>
      <Ruler />
    </div>
  );
};

const mapState = state => {
  return {
    teams: state.teams,
    winner: state.teams.winner,
    gameNum: state.teams.gameNum,
    apiStatus: state.teams.apiStatus
  };
};

export default connect(mapState)(Bracket);
