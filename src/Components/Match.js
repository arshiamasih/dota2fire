import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      style : {
        id: null,
        default: 'select-winner-btn',
        winner: 'winner',
        nextRound: 'next-round'
      }
    }
  }

  createPairedTeams(){
    const {roundPosition, gameNum} = this.props
    const winningRound = Math.log2(gameNum.n)
    let arr = this.props.teams.splice(0,2)
 
    return arr.map((team, i) => {
      return (
      <div key={i} >
        <Team
          id={i}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          name={team['name']}
          win={team['win']}
          selectWinner={this.selectWinner}
          style={this.state.style}
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
      style: {
        id: id,
        default: 'select-winner-btn',
        winner: 'winner'
      }
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
  gameNum: state.teams.gameNum

})
const mapDispatch = (dispatch) => ({
  getWinner: (round, match, name)=>dispatch(getWinner(round, match, name))
})

export default connect(mapState, mapDispatch)(Match)

