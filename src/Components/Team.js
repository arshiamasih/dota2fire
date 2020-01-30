import React from 'react'

const Team = (props) => {

    return (
      <div className={'team'}>
      <p >Team {props.name}</p>
      <button 
      id={props.id}
      matchPosition={props.matchPosition}
      roundPostion={props.roundPosition}
      className={'select-winner'}
      name={props.name}
      onClick={props.selectWinner}>
      Select Winner
      </button>
      </div>
    )
}

export default Team