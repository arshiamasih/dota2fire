import React from 'react';
import { getGameNum, getTeams, getPlayers } from '../store/actions'
import { connect } from 'react-redux'


const GameButtonGroup = (props) => {

  const onClick = async (event)=> {
    event.preventDefault()
    const obj = {
      0: 2,
      1: 4,
      2: 8,
      3: 16,
    }
    console.log('BUTTON', obj[event.target.id])
    props.getGameNum(obj[event.target.id])
    props.getTeams(obj[event.target.id])
    await props.getPlayers(obj[event.target.id])

  }

  return (
    <div className={'button-group'}>
        <p>Select # of Teams</p>
        <button id={0} onClick={event => onClick(event)}>Two</button>
        <button id={1}  onClick={event => onClick(event)}>Four</button>
        <button id={2}  onClick={event => onClick(event)}>Eight</button>
        <button id={3}  onClick={event => onClick(event)}>Sixteen</button>

    </div>
  );
}



const mapDispatch = (dispatch) => ({
  getGameNum: (n)=>dispatch(getGameNum(n)),
  getTeams: (n)=>dispatch(getTeams(n)),
  getPlayers: (n)=>dispatch(getPlayers(n))
})

export default connect(null, mapDispatch)(GameButtonGroup)
