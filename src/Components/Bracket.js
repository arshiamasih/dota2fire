import React from 'react'
import Round from './Round'


class Bracket extends React.Component {

  createRounds(n) {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    return [...Array(numTeams)].map(() => {
      return <div><Round numMatches={matchCalculation /= 2}/></div>
    });
  }
  render(){
   const numTeams = 16 // teams array.length from state
   return( <div className={'bracket'}>
    {this.createRounds(numTeams)}
    </div>
   )
  }
}


export default Bracket