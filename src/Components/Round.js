import React from 'react'
import Match from './Match'

class Round extends React.Component {
  //map to state
  //iterate through matches based on winners
  //match takes a competing teams and winner prop

  createMatches(n) {
    const matches = []
    for(let i = 1; i <= n; i++) {
      matches.push(<Match/>)
    }
    return matches
  }
 
  render(){
    //round accepts a prop to dictate # of matches
    const {numMatches} = this.props
    //dynamic className to update to 1 when this.props === 1
    return (
    <div className={'round'}>
      {numMatches === 1 ? <h3> WINNER! </h3> : null}
      {this.createMatches(numMatches)}
    </div>
    )
  }

}

export default Round