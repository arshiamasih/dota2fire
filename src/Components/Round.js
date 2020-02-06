import React from 'react'
import Match from './Match'
import { defineTeamNum } from '../helpers'

const Round = (props) => {
  
  const createMatches=(n) =>{
    let positionVal = 0
    const matches = [...props.matches]
    return [...Array(n)].map((_, i) => {
      return <div><Match
      key={i}
      teams={matches}
      roundPosition={props.roundPosition}
      matchPosition={positionVal++}/></div>});
  }

    //round accepts a prop to dictate # of matches per round
    const { numMatches, roundPosition } = props
    const winningRound = Math.log2(defineTeamNum.n)

    return (
    <div className={'round'}>
      <p>{roundPosition !== winningRound? roundPosition+1:  'Winner!' }</p>
      {createMatches(numMatches)}
    </div>
    )
}
export default Round