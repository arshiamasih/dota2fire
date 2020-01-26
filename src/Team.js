import React from 'react'

class Team extends React.Component {
  render() {
    return (
      <div>
      <h3>Team {this.props.id}</h3>
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