import React from "react";
import logoDota from "../img/logoDota.png";
import Bracket from "./Bracket";
import Welcome from "./Welcome";
import GameButtonGroup from "./ButtonGroup";
import Modal from "./Modal";
import { connect } from "react-redux";
import "../style/App.css";

//component hierarchy: App > Round > Match > Team
const App = props => {
  const { gameNum, modal } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logoDota}
          className={"logo"}
          height={"100%"}
          alt={"dota2-logo"}
        />
        <div className={"header-text"}>
          <p className={"header-text"}>
            <code>DOTA 2 FIRE</code>
          </p>
        </div>
      </header>
      <main className={"main"}>
        <GameButtonGroup />
        {gameNum.start ? <Bracket /> : <Welcome />}
        {modal && <Modal />}
      </main>
    </div>
  );
};

const mapState = state => {
  return {
    gameNum: state.teams.gameNum,
    modal: state.teams.modalExpand,
    apiStatus: state.teams.apiStatus
  };
};
export default connect(mapState)(App);
