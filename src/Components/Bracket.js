import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'

//changes the # teams to dynamically update rounds & brackets & # of teams
//must be tournament a valid value (4, 8, 16, 32)
//set at 8 for testing
export const defineTeamNum = {num: 8}

class Bracket extends React.Component {

  async componentDidMount(){  
   this.props.getTeams(defineTeamNum.num)
  }

  createRounds = (n) => {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    //should not use index for key & position
    return [...Array(numTeams)].map((_, i) => {
      return <div><Round 
      key={i}
      teams={this.props.teams}
      roundPosition={i} 
      numMatches={matchCalculation /= 2}/></div>
    });
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
    teams: state.teams
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Bracket)