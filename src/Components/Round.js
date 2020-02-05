import React from 'react'
import Match from './Match'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Round extends React.Component {
  //map to state
  createMatches(n) {
    let positionVal = 0
    const matches = [...this.props.matches]

    return [...Array(n)].map((_, i) => {
      console.log('count', i)
      return <div><Match
      teams= {matches}
      winners={null}
      roundPosition={this.props.roundPosition}
      matchPosition={positionVal++}/></div>});
  }

  render(){
    //round accepts a prop to dictate # of matches
    const { numMatches } = this.props

    return (
    <div className={'round'}>
      {numMatches === 1 ? <p> Final round! </p> : null}
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