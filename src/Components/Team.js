import React from 'react'
import { defineTeamNum } from '../helpers'


const Team = (props) => {
    const {roundPosition} = props
    const winningRound = Math.log2(defineTeamNum.n)
 

    return (
      <div className={'team'}>
      {/* {props.win? <div><p >Team {props.name}</p> </div>
       : null} */}
   

    <button 
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={'select-winner-btn'}
          name={props.name}
          win={false}
          onClick={props.selectWinner}>
          {props.name}
        </button> 
      </div>
    )
}

export default Team

// {roundPosition !== winningRound?
//   <button 
//         id={props.id}
//         matchPosition={props.matchPosition}
//         roundPostion={props.roundPosition}
//         className={'select-winner-btn'}
//         name={props.name}
//         win={false}
//         onClick={props.selectWinner}>
//         {props.name}
//       </button> : <p>{props.name}</p>}