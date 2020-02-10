import React from 'react';
import { getGameNum, getTeams, getPlayers } from '../reducer/actions'
import { connect } from 'react-redux'


const GameButtonGroup = (props) => {

  const labels = ['Two', 'Four', 'Eight', 'Sixteen']
  const onClick = async (event)=> {
    event.preventDefault()
    const obj = {
      0: 2,
      1: 4,
      2: 8,
      3: 16,
    }
    props.getGameNum(obj[event.target.id])
    props.getTeams(obj[event.target.id])
  }

  return (
    <div className={'button-group'}>
    {props.gameNum.start? <div ><p><code>Start new game:</code></p></div> : <div ><p><code>Select # of teams:</code></p></div>} 
        <div className={'button-group-btn'} >
        {labels.map((label,i) => {
          return <button className={'game-btn'} key={i} id={i} onClick={event => onClick(event)}>{label}</button>
        }) } 
       </div>
    </div>
  );
}

const mapState = (state) => {
  return {
    gameNum: state.teams.gameNum
  }
}

const mapDispatch = (dispatch) => ({
  getGameNum: (n)=>dispatch(getGameNum(n)),
  getTeams: (n)=>dispatch(getTeams(n)),
})

export default connect(mapState, mapDispatch)(GameButtonGroup)
