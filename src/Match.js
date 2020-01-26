import React from 'react'
import Team from './Team'

class Match extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      teams: [
        {id: 1,
          rank: 1,
          wins: 5,
          losses: 3},
        {id: 2,
          rank: 3,
          wins: 4,
          losses: 1},    
      ]
    }
  }
  render() {
    //isWinner prop if selected
    //or by higher score
    const { teams }  = this.state
    return (
      <div>
      {teams.map((team, i) => {
      return (<div key={i}><Team id={team.id}/></div> )
      })}
      </div>
    )
  }
}
export default Match