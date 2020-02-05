import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      currRound: 0
    }
}

  createInitialPairedTeams(){
    //const teams = [...this.props.teams]
    //console.log('MATCH', teams)
    return this.props.teams.splice(0,2).map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          name={team['name']}
          isWinner={false}
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
      nextRound: roundPosition + 1,
    })
    this.props.getWinner(this.state.round, this.state.match, this.state[id])


  }

  render() {

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
        {this.createInitialPairedTeams()}
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

