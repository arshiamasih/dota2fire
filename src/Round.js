import React from 'react'
import Match from './Match'

class Round extends React.Component {
  //map to state
  //iterate through matches based on winners
  //match takes a teams prop
  render(){
    return (
    <div className={'round'}>
      <Match/>
    </div>
    )
  }

}

export default Round