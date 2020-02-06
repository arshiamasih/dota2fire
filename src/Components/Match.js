import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props){
    super(props)
  }

  createPairedTeams(){
    return this.props.teams.splice(0,2).map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          name={team['name']}
          win={team['win']}
          selectWinner={this.selectWinner}
    />         
      </div> )
    })
  }

  selectWinner = async (event) =>{
    event.preventDefault()
    const {roundPosition, matchPosition} = {...this.props}
    const {id, name} = event.target

   await this.setState({
      [id]: name,
      round: roundPosition,
      match: matchPosition,
    })
   
    this.props.getWinner(this.state.round, this.state.match, this.state[id])
  }

  render() {
    return (
      <div className={'match'}>
        {this.createPairedTeams()}
      </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teams.winner,

})
const mapDispatch = (dispatch) => ({
  getWinner: (round, match, name)=>dispatch(getWinner(round, match, name))
})

export default connect(mapState, mapDispatch)(Match)

