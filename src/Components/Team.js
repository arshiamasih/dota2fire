import React from 'react'

const Team = (props) => {

    return (
      <div className={'team'}>
      <p >Team {props.name}</p>
        {props.name? 
        <button 
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={'select-winner'}
          name={props.name}
          onClick={props.selectWinner}>
          Select Winner
        </button> : null}
      </div>
    )
}

export default Team