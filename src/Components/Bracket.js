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
    const matches = [...Array(numRounds)].reduce((matches, el, i)=>{
      if(i === 0) matches[i] = teams
      else matches[i] = Object.values(winner[i]['matches'])
      return matches
    }, {})
    let padding = '10%'
    
    return [...Array(numRounds)].map((_, i) => {
      padding = parseInt(padding)
      padding = padding * 2 
      return <div style={{paddingTop:padding}}><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      padding={padding}
      numMatches={Math.ceil(matchCalculation /= 2)}/></div>
    });
  }

  render(){

   return( 
    <div>
      {/* <div style={{padding: '1em'}}><input/></div> */}
      <div className={'bracket'}>
        {this.createRounds(defineTeamNum.num)}
      </div>
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

