import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'


//changes the # teams to dynamically update rounds & brackets & # of teams
//must be tournament a valid value (4, 8, 16)
//set at 8 for testing
export const defineTeamNum = {
  num: 16
}

class Bracket extends React.Component {

  async componentDidMount(){  
   this.props.getTeams(defineTeamNum.num)
  }

  createRounds = (n) => {
    const numTeams =  Math.log2(n)
    let matchCalculation = n

    const teams = [...this.props.teams.teams]
    const winner = {...this.props.winner}

      const matches = {
      0: teams,
      1: Object.values(winner[0]['matches']),
      2: Object.values(winner[1]['matches']),
      3: Object.values(winner[2]['matches'])
    }
    
    const arr =  [...Array(numTeams)].map((_, i) => {
      return <div><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      numMatches={matchCalculation /= 2}/></div>
    });

    return arr
  }

  render(){
   const numTeams = defineTeamNum.num
   return( 
    <div className={'bracket'}>
      {this.createRounds(numTeams)}

    </div>
   )
  }
}

const mapState = (state) => {
  return {
    teams: state.teams,
    winner: state.teams.winner
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Bracket)

