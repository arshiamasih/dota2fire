import React from 'react'
import { defineTeamNum } from '../helpers'


const Team = (props) => {
    const {roundPosition} = props
    const winningRound = Math.log2(defineTeamNum.n)
    return (
      <div className={'team'}>
      {props.win? <div><p >Team {props.name}</p> </div>
       : null}
   
   {roundPosition !== winningRound?
    <button 
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={'select-winner'}
          name={props.name}
          onClick={props.selectWinner}>
          Select Winner
        </button> : null }
      </div>
    )
}

export default Team