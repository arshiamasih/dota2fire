import React from 'react'
import Round from './Round'
import Ruler from './Ruler'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'


const Bracket = (props) => {  
  const createRounds = (n) => {
    const numRounds =  Math.log2(n)
    let matchCalculation = n/2
    const teams = [...props.teams.teams]
    const winner = {...props.winner}
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
      return <div style={{paddingTop:paddingTop[i], paddingBottom:paddingTop[i]}}>
      <Round 
        key={i}
        teams={null}
        roundPosition={i} 
        matches={matches[i]}
        padding={matchPadding[i]}
        paddingTop={paddingTop}
        gameNum={props.gameNum}
        numMatches={Math.ceil(matchCalculation /= 2)}/></div>
    });
  }

   return( 
    <div>
      <div className={'bracket'}>
        {createRounds(props.gameNum.num)}
      </div>
      <Ruler/>
    </div>
   )
  
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

