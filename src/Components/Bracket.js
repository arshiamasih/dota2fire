import React from 'react'
import Round from './Round'

//changes the # teams to dynamically update rounds & brackets 
export const defineTeamNum = {num: 16}

class Bracket extends React.Component {

  createRounds(n) {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    return [...Array(numTeams)].map(() => {
      return <div><Round numMatches={matchCalculation /= 2}/></div>
    });
  }
  render(){
   const numTeams = defineTeamNum.num // teams array.length from state
   return( <div className={'bracket'}>
    {this.createRounds(numTeams)}
    </div>
   )
  }
}


export default Bracket