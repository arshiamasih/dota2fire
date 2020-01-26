import React from 'react'
import Team from './Team'

class Match extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      teams: [
        {id: 1,
          name: 'Warriors',
          rank: 1,
          isWinner: false
        },
        {id: 2,
          name:'Vikings',
          rank: 3,
          isWinner: false},    
      ]
    }
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
    
    const { teams }  = this.state
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
export default Match