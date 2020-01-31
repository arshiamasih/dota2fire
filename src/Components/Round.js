import React from './node_modules/react'
import Match from './Match'
import { connect } from './node_modules/react-redux'
import { getWinner } from '../store/actions'


class Round extends React.Component {
  //map to state
  createMatches(n) {
    let positionVal = 0
    const teams = [...this.props.teams.teams]
    const rounds = [...Array(n)].map(() => {
      return <div><Match
      teams= {teams.splice(0,2)}
      winners={null}
      roundPosition={this.props.roundPosition}
      matchPosition={positionVal++}/></div>});
    return rounds 
  }

  updatesMatches(){
      //match at [index] = <Match />
      //team winner prop set to true
      // updates name from null
  }
 
  render(){
    //round accepts a prop to dictate # of matches
    const { numMatches } = this.props
    console.log('ROUND', this.props)
    const matchesArr = this.createMatches(numMatches)

  
    return (
    <div className={'round'}>
      {numMatches === 1 ? <p> Final round! </p> : null}
      {matchesArr}
    </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teams.winner,
})
export default connect(mapState)(Round)