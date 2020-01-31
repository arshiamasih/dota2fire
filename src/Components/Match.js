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


  createInitialPairedTeams(){
    //const teams = [...this.props.teams]
    const teams = [...this.props.teams]
    //how to set team iswinner to true with the info i have?
    //iterate
    //if this.props.winner.teamname === this.props.name
    //set isWinner to true
    //if isWinner is true, update name
    return teams.map((team, i) => {
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
      arr[0] = <Team name={teamData }
        id={0} 
        matchPosition={this.props.matchPosition}
        roundPosition={this.props.roundPosition}
        isWinner={false}
        selectWinner={this.selectWinner}/> 
      arr[1] = <Team name={winners[1]}/> 
    }
    return arr
  }

  selectWinner = async (event) =>{
    event.preventDefault()
    console.log('am i firing??')
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
    this.addWinnerToNextRound() 
  }

  render() {
    const teams = [...this.props.teams]
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
