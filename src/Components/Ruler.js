import React from "react";
import { connect } from "react-redux";
import { getPlayers } from "../reducer/actions";

//create a 'ruler' where user can click for team info
const Ruler = props => {
  //handle fetch request for player info
  const handleOnClick = async event => {
    const { id, name } = event.target;
    await props.getPlayers(id, name);
  };
  const { teams } = { ...props };
  return (
    <div className={"player-ruler"}>
      <div className={"team-details"}>
        {teams.map(el => {
          return (
            <div>
              <button
                className={"team-details-btn"}
                onClick={event => handleOnClick(event)}
                id={el["team_id"]}
                name={el["name"]}
              >
                {el.name}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <p>
          <code>discover the players</code>
        </p>
      </div>
    </div>
  );
};

const mapState = state => ({
  teams: state.teams.teams
});

const mapDispatch = dispatch => ({
  getPlayers: (id, name) => dispatch(getPlayers(id, name))
});

export default connect(mapState, mapDispatch)(Ruler);
