import React from 'react'
import Round from './Round'

class Bracket extends React.Component {
  //map to state
  //iterate through matches based on winners
  render(){
   return( <div className={'bracket'}>
    <Round/>
    <Round/>
    <Round/>
    <Round/>
    </div>
   )
  }

}

export default Bracket