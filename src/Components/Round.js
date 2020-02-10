import React from 'react'
import Match from './Match'

const Round = (props) => {
  const { numMatches, roundPosition, padding} = props
 
  const createMatches=(n) => {
    let positionVal = 0
    const matches = [...props.matches]
    return [...Array(n)].map((_, i) => {

      return <div style={{paddingTop: props.padding, paddingBottom:padding}}><Match
      key={i}
      teams={matches}
      className={null}
      roundPosition={roundPosition}
      padding={padding}
      matchPosition={positionVal++}/></div>
    
    });
  }

    //round accepts a prop to dictate # of matches per round
    return (
    <div className={'round'}>
      <div>{createMatches(numMatches)}</div>
    </div>
    )
}
export default Round