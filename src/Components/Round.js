import React from 'react'
import Match from './Match'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Round extends React.Component {
  //map to state
  createMatches(n) {
    let positionVal = 0
    const matches = [...this.props.matches]
    console.log('WHAT THE FUCK', matches)



    return [...Array(n)].map((_, i) => {
      console.log('count', i)
      return <div><Match
      teams= {matches}
      winners={null}
      roundPosition={this.props.roundPosition}
      matchPosition={positionVal++}/></div>});
   
  }

  // updatesMatches(){
  //   const teams = this.props.matches
  //   let positionVal = 0
  //   //respective match spliced 
  //   //this.props.matches

  //   const matches = [...Array(8)].map(() => {
  //     return <div><Match
  //     teams= {teams.splice(0,2)}
  //     winners={null}
  //     roundPosition={this.props.roundPosition}
  //     matchPosition={positionVal++}/></div>});
  //   return matches
  
  // }
 
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
  teams: state.teams,
})
export default connect(mapState)(Round)