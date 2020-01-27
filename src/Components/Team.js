import React from 'react'

class Team extends React.Component {
  render() {
    return (
      <div className={'team'}>
      <p >Team {this.props.id}</p>
      <button 
      className={'select-winner'}
      id={this.props.id}
      onClick={(event)=>this.props.selectWinner(event)}>
      Winner
      </button>
      </div>
    )
  }
}

export default Team