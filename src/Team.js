import React from 'react'

class Team extends React.Component {
  render() {
    return (
      <div>
      <p>Team {this.props.id}</p>
      <button 
      id={this.props.id}
      onClick={(event)=>this.props.selectWinner(event)}>
      Select Winner
      </button>
      </div>
    )
  }
}

export default Team