import React from 'react'
import Match from './Match'

class Round extends React.Component {
  //map to state

  createMatches(n) {
    let positionVal = 0
    //slice team data here and pass as props
    return [...Array(n)].map(() => {
      return <div><Match 
      teams= {this.props.teams}
      roundPosition={this.props.roundPosition}
      matchPosition={positionVal++}/></div>});
  }

  updatesMatches(){
      //match at index = <Match />
      //team winner prop set to true
      // updates name from null
  }
 
  render(){
    //round accepts a prop to dictate # of matches
    const { numMatches } = this.props
   
    return (
    <div className={'round'}>
      {numMatches === 1 ? <p> Final round! </p> : null}
      {this.createMatches(numMatches)}
    </div>
    )
  }
}
export default Round