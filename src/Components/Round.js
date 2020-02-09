import React from 'react'
import Match from './Match'
import { defineTeamNum } from '../helpers'

const Round = (props) => {
  
  const createMatches=(n) =>{
    let positionVal = 0
    const matches = [...props.matches]
    return [...Array(n)].map((_, i) => {

      return <div style={{paddingTop: props.padding}}><Match
      key={i}
      teams={matches}
      className={null}
      roundPosition={props.roundPosition}
      padding={props.padding}
      matchPosition={positionVal++}/></div>});
  }

    //round accepts a prop to dictate # of matches per round
    const { numMatches, roundPosition, gameNum } = props
    //replace with gameNum
    //const winningRound = Math.log2(defineTeamNum.n)

    return (
    <div className={'round'}>
      
      <div>{createMatches(numMatches)}</div>
    </div>
    )
}
export default Round