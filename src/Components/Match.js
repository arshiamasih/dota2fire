import React, { Component } from "react";
import Team from "./Team";
import { connect } from "react-redux";
import { getWinner } from "../reducer/actions";
import Connector from "./Connector";

class Match extends Component {
  state = {
    style: {
      id: null,
      default: "select-winner-btn",
      winner: "winner",
      nextRound: "next-round"
    }
  };

  createPairedTeams() {
    let pairedTeams = this.props.teams.splice(0, 2);

    return pairedTeams.map((team, i) => {
      return (
        <div key={i}>
          <Team
            id={i}
            matchPosition={this.props.matchPosition}
            roundPosition={this.props.roundPosition}
            name={team["name"]}
            selectWinner={this.selectWinner}
            style={this.state.style}
          />
        </div>
      );
    });
  }

  selectWinner = async event => {
    event.preventDefault();
    const { roundPosition, matchPosition } = { ...this.props };
    const { id, name } = event.target;

    await this.setState({
      [id]: name,
      round: roundPosition,
      match: matchPosition,
      style: {
        id: id,
        default: "select-winner-btn",
        winner: "winner"
      }
    });

    this.props.getWinner(this.state.round, this.state.match, this.state[id]);
  };

  render() {
    const winningRound = Math.log2(this.props.gameNum.n);
    const { style } = this.state;
    return (
      <div className={"match-connector"}>
        {this.props.roundPosition !== 0 ? (
          <Connector
            winningRound={winningRound}
            round={this.props.roundPosition}
          />
        ) : null}
        <div className={style.id ? "match-win" : "match"}>
          {this.createPairedTeams()}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  winner: state.teams.winner,
  gameNum: state.teams.gameNum
});
const mapDispatch = dispatch => ({
  getWinner: (round, match, name) => dispatch(getWinner(round, match, name))
});

export default connect(mapState, mapDispatch)(Match);
