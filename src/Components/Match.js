import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'
import Team from './Team'
import { defineTeamNum } from './Bracket'

class Match extends React.Component {

  
  componentDidMount(){
   this.props.getTeams(defineTeamNum.num)
    console.log('mounted')
    //state changes to re-render if necessary
  }

  //mutates state 
  createPairedTeams(teamsCopy = this.props.teams.teams){
    //console.log(this.props.teams)
    //const { teams }  = this.props.teams
    //const teamsCopy = [...teams]
    if (teamsCopy.length === 0) {
      return
    }
    return teamsCopy.splice(0,2).map((team, i) => {
     
      return (
      <div key={i}>
       
        <Team 
          id={i+1}
          teamName={team['name']}
          isWinner={team.isWinner}
          selectWinner={this.selectWinner}/>
          
      </div> )
      })
      
    return this.createPairedTeams(teamsCopy)  

  }

  // selectWinner=(event)=>{
  //   const {id} = event.target
  //   console.log(`selecting winner team ${event.target.id}`)
  //   const teamsID = [...this.state.teams]
  //   for(let i = 0; i < teamsID.length; i++) {
  //     if(parseInt(id) === teamsID[i].id) {
  //       teamsID[i].isWinner = true
  //     }
  //   }
  //   this.setState({ teams: teamsID })
  // }


  render() {
    //isWinner prop if selected
    //or by higher score manually input by user
    //match will take team IDs from props and pair teams accordingly
    //only 1 team in winner round (not technically a match?)
    
    const { teams }  = this.props.teams
  
    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
      
      {this.createPairedTeams()}
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
export default connect(mapState, mapDispatch)(Match)