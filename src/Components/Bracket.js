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
  
    const matchPadding = {
      0: '5%',
      1: '100%',
      2: '200%'
    }

    const padding = {
      0: '0%',
      1: '10%',
      2: '20%',
      3: '35%',
      4: '37.25%'
    }
    
    
    return [...Array(numRounds)].map((_, i) => {

      return <div style={{paddingTop:padding[i]}}><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      padding={matchPadding[i]}
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

