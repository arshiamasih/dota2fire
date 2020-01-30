import React from 'react'
import Team from './Team'


class Match extends React.Component {
 

  //this logic doesn't totaly make sense here.
  createInitialPairedTeams(teams){

   //gets team data from props and executes this.
    const teamsProps = [...teams]
    const teamsCopy = [...teams]
  
    return teamsCopy.splice(0,2).map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
          // teams={teamsProps}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          teamName={team['name']}
          isWinner={team.isWinner}
          selectWinner={this.selectWinner}/>
          
      </div> )
      })
   
  }

 

  render() {
    //isWinner prop if selected
    //or by higher score manually input by user
    //match will take team IDs from props and pair teams accordingly
    //only 1 team in winner round (not technically a match?)
    
    //const { teams }  = this.props.teams
    const teams = [...this.props.teams.teams]
    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
    
      {this.props.roundPosition === 0 ? this.createInitialPairedTeams(teams) : null}
      {this.props.roundPosition === 1 && this.props.matchPosition === 0 ? <p>hi</p> : null}
      {this.props.roundPosition === 1 && this.props.matchPosition === 1 ? <p>bye</p> : null}
      
      </div>
    )
  }
}

export default Match 
