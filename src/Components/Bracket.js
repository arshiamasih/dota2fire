import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'
import { defineTeamNum } from '../helpers'



class Bracket extends React.Component {

  async componentDidMount(){  
   const numTeams = defineTeamNum.n
   this.props.getTeams(numTeams)
  }

  createRounds = (n) => {
    const numRounds =  Math.log2(n)
    let matchCalculation = n/2

    const teams = [...this.props.teams.teams]
    const winner = {...this.props.winner}

    // const matches = {
    //   0: teams,
    //   1: Object.values(winner[1]['matches']),
    //   2: Object.values(winner[2]['matches']),
    //   3: Object.values(winner[3]['matches']),
    // }

    const matches = [...Array(numRounds)].reduce((matches, el, i)=>{
      if(i === 0) {
        matches[i] = teams
      } else {
        matches[i] = Object.values(winner[i]['matches'])
      }
      console.log('matches', matches)
      return matches
    }, {})
    
    const arr =  [...Array(numRounds)].map((_, i) => {
      console.log('test',matchCalculation)
      return <div><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      numMatches={Math.ceil(matchCalculation /= 2)}/></div>
    });

    return arr
  }

  render(){

   return( 
    <div className={'bracket'}>
      {this.createRounds(defineTeamNum.num)}

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

