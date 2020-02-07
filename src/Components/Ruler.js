//get team player details
//create a 'ruler' where user can hover for team info
import React from 'react'
import { connect } from 'react-redux'
import {getTeams} from '../store/actions'

class Ruler extends React.Component {

  async componentDidMount(){
    const { gameNum } = this.props
    const response = await fetch('https://api.opendota.com/api/teams')
    const data = await response.json()
    //console.log('action', data)
    const teams = data.slice(0,16);
    const responseID = await fetch(`https://api.opendota.com/api/teams/${39}/players`)
    const dataID = await responseID.json()
    console.log('ruler data', dataID)

  }

  render() {
    return (
      <div><p>Team Details</p></div>
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

export default connect(mapState, mapDispatch)(Ruler)