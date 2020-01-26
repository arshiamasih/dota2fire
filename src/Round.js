import React from 'react'
import Match from './Match'

class Round extends React.Component {
  //map to state
  //iterate through matches based on winners
  //match takes a competing teams and winner prop
  render(){
    return (
    <div className={'round'}>
      <Match/>
    </div>
    )
  }

}

export default Round