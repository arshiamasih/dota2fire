import React from 'react'
import Round from './Round'


class Bracket extends React.Component {
  //map to state to get team length, pass value into createRounds method
  //use iterator instead of for loop??
  //round level prop

  createRounds(n) {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    const rounds = []
    for(let i = 0; i <= numTeams; i++) {
      rounds.push(<Round numMatches={matchCalculation}/>)
      matchCalculation = matchCalculation/2
      console.log(matchCalculation)
    }
    return rounds
  }
  render(){
   const numTeams = 16 // teams array.length 
   return( <div className={'bracket'}>
    {this.createRounds(numTeams)}
    </div>
   )
  }
}


export default Bracket