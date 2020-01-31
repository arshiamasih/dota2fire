import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    name: '',
    positions: {
      round: null,
      match: null,
      team: null
    },
    //hard code test 
    winners: {
      0: null,
      1: null,
      2: null,
      3: null
    }
  }
}

  //this logic should come from parent component passing down team prop to each match child
  createInitialPairedTeams(teams){
   //gets team data from props and executes this.
    const teamsCopy = [...teams]
    return teamsCopy.splice(0,2).map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
          // teams={teamsProps}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          name={team['name']}
          isWinner={false}
          selectWinner={this.selectWinner}
    />         
      </div> )
    })
   
  }

  //this logic can potentially go up to round level
  addWinnerToNextRound(team){
    const arr = []  
    const {teamData} = this.props.winner
    const {winners} = {...this.state}

    //HARD CODED FOR TESTING
    if(this.props.roundPosition === 1 && this.props.matchPosition === 0) {
      arr[0] = <Team name={teamData}/> 
      arr[1] = <Team name={winners[1]}/> 

    }
    if(this.props.roundPosition === 1 && this.props.matchPosition === 1 ) {
      arr[0] = <Team name={null}/> 
      arr[1] = <Team name={null}/> 
    }
    return arr
  }

  selectWinner = async (event) =>{
    event.preventDefault()
    const {id, name} = event.target
    const {roundPosition, matchPosition} = {...this.props}
    const position =  {
      round: roundPosition,
      match: matchPosition,
      team: id
    }
     await this.setState({
      name: name, 
      positions: position
    })

    this.props.getWinner(this.state.name, this.state.positions)
    //this.addWinnerToNextRound() 
  }

  render() {
    const teams = [...this.props.teams.teams]
    const seedRound = 0

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
        {this.props.roundPosition === seedRound ? this.createInitialPairedTeams(teams) : null}
        {this.props.roundPosition !== seedRound ? this.addWinnerToNextRound(this.props.winner.teamData) : null}
      </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teams.winner
})
const mapDispatch = (dispatch) => ({
  getWinner: (t,p)=>dispatch(getWinner(t,p))
})

export default connect(mapState, mapDispatch)(Match)
