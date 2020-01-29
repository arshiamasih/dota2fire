import React from 'react'

class Team extends React.Component {
  constructor(props) {
    super(props)

    //assining props to state might anti-pattern
    this.state = {
      teams: this.props.teams,
      positions: {
        round: null,
        match: null,
        team: null
      }
    }
  }
  //click updates state with team info
  //object is sent back to redux
  //calculates winner and position to traverse
  render() {
    console.log('TEAM', this.state.teams)
    return (
      <div className={'team'}>
      <p >Team {this.props.teamName}</p>
      <button 
      id={this.props.id}
      matchPosition={this.props.matchPosition}
      roundPostion={this.props.roundPosition}
      className={'select-winner'}
      teamName={this.props.teamName}
      onClick={(event)=>this.props.selectWinner(event)}>
      Winner
      </button>
      </div>
    )
  }
}

export default Team