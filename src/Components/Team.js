import React from 'react'

const Team = (props) => {

    return (
      <div className={'team'}>
      <p >Team {this.props.name}</p>
      <button 
      id={this.props.id}
      matchPosition={this.props.matchPosition}
      roundPostion={this.props.roundPosition}
      className={'select-winner'}
      name={this.props.tname}
      onClick={this.props.selectWinner}>
      Winner
      </button>
      </div>
    )
}

export default Team