import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'

//changes the # teams to dynamically update rounds & brackets 
export const defineTeamNum = {num: 8}

class Bracket extends React.Component {

  async componentDidMount(){
   this.props.getTeams(defineTeamNum.num)
    
   }

  createRounds(n) {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    return [...Array(numTeams)].map((_, i) => {
      return <div><Round 
      teams={this.props.teams}
      roundPosition={i} 
      numMatches={matchCalculation /= 2}/></div>
    });
  }
  render(){
   const numTeams = defineTeamNum.num
  
   return( <div className={'bracket'}>
    {this.createRounds(numTeams)}
    </div>
   )
  }
}

const mapState = (state) => {
  return {
    teams: state.teamsTest
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Bracket)