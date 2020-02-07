import React from 'react'
import { connect } from 'react-redux'


const Team = (props) => {
    const {roundPosition, style, id, gameNum} = props
    const winningRound = Math.log2(gameNum.n)
    let buttonStyle = style.default
    if(id === parseInt(style.id) && props.name) {
      buttonStyle = style.winner
    } else {
      buttonStyle = style.default
    }
    return (
      <div className={'team'}>
   
      {roundPosition !== winningRound?
      <button 
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={buttonStyle}
          name={props.name}
          win={props.win}
          onClick={props.selectWinner}
          >
          {props.name}
        </button> 
      :
      <button 
          id={props.id}
          matchPosition={props.matchPosition}
          roundPostion={props.roundPosition}
          className={buttonStyle}
          name={props.name}
          win={props.win}
          >
      {props.name}
    </button> 

   }
    </div>


    )
}

const mapState = (state) => {
  return {
    gameNum: state.teams.gameNum
  }
}

export default connect(mapState)(Team)
