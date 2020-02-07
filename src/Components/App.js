import React from 'react';
import logoDota from '../logoDota.png';
import Bracket from './Bracket'
import Intro from './Intro'
import GameButtonGroup from './ButtonGroup'
import { connect } from 'react-redux'
import '../App.css';


//component hierarchy: App > Round > Match > Team
const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoDota}  className={'logo'}height={'100%'}/>
          <div className={'header-text'}>
          <p className={'header-text'}>
           <code>DOTA 2 FIRE</code> 
          </p>
          </div>
 
        </header>
        <main className={'main'}>
     
        <GameButtonGroup/>  
       
        {props.gameNum.start? <Bracket/> : <Intro/>}
        </main>
      </div>
    );
}

const mapState = (state) => {
  return {
    gameNum: state.teams.gameNum
  }
}
export default connect(mapState)(App);
