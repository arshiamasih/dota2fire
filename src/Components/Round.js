import React from 'react'
import Match from './Match'

class Round extends React.Component {
  //map to state
  //iterate through matches based on winners

  createMatches(n) {
  let positionVal = 0
  return [...Array(n)].map(() => {
    return <div><Match 
    teams= {this.props.teams}
    roundPosition={this.props.roundPosition}
    matchPosition={positionVal++}/></div>});
  }
 
  render(){
    //round accepts a prop to dictate # of matches
    const {numMatches} = this.props
   
    return (
    <div className={'round'}>
      {numMatches === 1 ? <p> Final round! </p> : null}
      {this.createMatches(numMatches)}
    </div>
    )
  }
}
export default Round