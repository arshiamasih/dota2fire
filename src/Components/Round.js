import React from 'react'
import Match from './Match'
import { connect } from 'react-redux'
import { defineTeamNum } from '../helpers'


class Round extends React.Component {

  createMatches(n) {
    let positionVal = 0
    const matches = [...this.props.matches]

    return [...Array(n)].map((_, i) => {
      return <div><Match
      teams= {matches}
      winners={null}
      roundPosition={this.props.roundPosition}
      matchPosition={positionVal++}/></div>});
  }

  render(){
    //round accepts a prop to dictate # of matches
    const { numMatches, roundPosition } = this.props
    const winningRound = Math.log2(defineTeamNum.n)

    return (
    <div className={'round'}>
      {roundPosition === winningRound-1 ? <p> Final Match! </p> : null}
      {roundPosition === winningRound ? <p> Winner! </p> : null}
      {this.createMatches(numMatches)}
    </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teams.winner,
  teams: state.teams,
})
export default connect(mapState)(Round)