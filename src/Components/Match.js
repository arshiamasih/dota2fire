import React from 'react'
import { connect } from 'react-redux'
import {getTeams} from '../store/actions'
import Team from './Team'

class Match extends React.Component {
  
  componentDidMount(){
    this.props.getTeams()

  }

  selectWinner=(event)=>{
    const {id} = event.target
    console.log(`selecting winner team ${event.target.id}`)
    const teamsID = [...this.state.teams]
    for(let i = 0; i < teamsID.length; i++) {
      if(parseInt(id) === teamsID[i].id) {
        teamsID[i].isWinner = true
      }
    }
    this.setState({ teams: teamsID })
 
  }
  render() {
    //isWinner prop if selected
    //or by higher score manually input by user
    //match will take team IDs from props and pair teams accordingly
    //only 1 team in winner round (not technically a match?)
    
    const { teams }  = this.props.teams
    return (
      <div className={'match'}>
      {teams.map((team, i) => {
      return (
      <div key={i}>
        <Team 
          id={team.id}
          isWinner={team.isWinner}
          selectWinner={this.selectWinner}/>
          
      </div> )
      })}
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
  getTeams: ()=>dispatch(getTeams())
})
export default connect(mapState, mapDispatch)(Match)