import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'
import { defineTeamNum } from '../helpers'

class Bracket extends React.Component {

  async componentDidMount(){  
   const numTeams = this.props.gameNum.n
   const {gameNum} = this.props.gameNum
   console.log('game num', gameNum)
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
      0: '4%',
      1: '25%',
      2: '60%',
      3: '50%',
      4: '10%'
    }

    const paddingTop = {
      0: '0%',
      1: '5%',
      2: '15%',
      3: '28%', 
      4: '37.25%'
    }
    
    
    return [...Array(numRounds)].map((_, i) => {

      return <div style={{paddingTop:paddingTop[i], paddingBottom:paddingTop[i]}}><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      padding={matchPadding[i]}
      paddingTop={paddingTop}
      numMatches={Math.ceil(matchCalculation /= 2)}/></div>
    });
  }

  render(){
  console.log('round', this.props.gameNum)
   return( 
    <div>
      {/* <div style={{padding: '1em'}}><input/></div> */}
      <div className={'bracket'}>
        
        {this.createRounds(this.props.gameNum.num)}
      </div>
    </div>
   )
  }
}

const mapState = (state) => {
  return {
    teams: state.teams,
    winner: state.teams.winner,
    gameNum: state.teams.gameNum
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Bracket)

