import React from 'react'

class Team extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: 1,
      rank: 1,
      wins: 5,
      losses: 3
    }
  }

  selectWinner = (id) => {

  }

  render() {
    const {id, rank, wins, losses} = this.state
    return (
      <div>
      <h2>Team {id}</h2>
      <button onClick={this.selectWinner}>Select Winner</button>
      </div>
    )
  }
}

export default Team