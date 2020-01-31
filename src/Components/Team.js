import React from './node_modules/react'

const Team = (props) => {
    return (
      <div className={'team'}>
      <p >Team {props.name}</p>
      {/* show button upon winner selection */}
        {props.name ? 
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