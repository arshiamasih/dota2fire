import React from 'react'

class Team extends React.Component {
  render() {
    return (
      <div className={'team'}>
      <p >Team {this.props.teamName}</p>
      <button 
      id={this.props.id}
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