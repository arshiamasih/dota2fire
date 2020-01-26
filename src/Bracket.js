import React from 'react'
import Round from './Round'
import Round2 from './Round2'
import Round3 from './Round3'
import Round4 from './Round4'

class Bracket extends React.Component {
  //map to state
  //iterate through matches based on winners
  //round level prop
  render(){
   return( <div className={'bracket'}>
    <Round/>
    <Round2/>
    <Round3/>
    <Round4/>
    </div>
   )
  }

}

export default Bracket