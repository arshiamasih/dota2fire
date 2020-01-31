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
    winners: {
      0: null,
      1: 'vikings',
      2: null,
      3: 'OG'
    }
  }
  this.selectWinner = this.selectWinner.bind(this)
}

  //this logic is not correct
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
          isWinner={null}
          selectWinner={this.selectWinner}
    />
          
      </div> )
      })
   
  }

  //this logic can potentially go up to round level
  addWinnerToNextRound(newWinner = this.props.winner.teamData){
    //console.log('winner', this.props.winner.teamData)
    
    //map state to winner prop from redux
    //updates name prop
    //copy state so that it does not override
    //'current round' vs 'next round'
    const arr = []  
  
    //const {round, match, team} = this.props.winner.positions
    //const {name} = this.props.winner.name
    const {winners} = {...this.state}
  
    if(this.props.roundPosition === 1 && this.props.matchPosition === 0) {
      arr[0] = <Team name={winners[0]}/> 
      //if this.props.winner.positions.team = 0
      //arr[team] = <Team name={''}/> 

      arr[1] = <Team name={winners[1]}/> 
      //if this.props.winner.positions.team = 1
      //arr[team] = <Team name={''}/> 
    }

    if(this.props.roundPosition === 1 && this.props.matchPosition === 1 ) {
      arr[0] = <Team name={winners[2]}/> 
      //if this.props.winner.positions.team = 0
      //arr[team] = <Team name={''}/> 
  
      arr[1] = <Team name={winners[3]}/> 
      //if this.props.winner.positions.team = 1
      //arr[team] = <Team name={''}/> 
    }

    if(this.props.roundPosition === 2 && this.props.matchPosition === 0 ) {
      arr[0] = <Team name={winners[1]}/> 
      //if this.props.winner.positions.team = 0
      //arr[team] = <Team name={''}/> 
 
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
    
    //this.props.getWinner(this.state.name, this.state.positions)

    this.props.getWinner(this.state.name, this.state.positions)
    //this.addWinnerToNextRound() 
    //might need to split this into logic and presentation
    //call add winner to round here or somewhere with props passing team data
   
  }

  render() {
    const teams = [...this.props.teams.teams]
    console.log(this.props)

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
      
        {this.props.roundPosition === 0 ? this.createInitialPairedTeams(teams) : null}

      {/* HARD CODED LOGIC FOR INDEXING -> UPDATE THIS WITH DYNAMIC FUNCTION HELPER */}
        {/* {this.props.roundPosition === 1 && this.props.matchPosition === 0 ? [<Team/>, <Team/> ]: null}
        {this.props.roundPosition === 1 && this.props.matchPosition === 1 ? [<Team/>, <Team/> ] : null}
        {this.props.roundPosition === 2 && this.props.matchPosition === 0 ? [<Team/>, <Team/> ]: null}
        {this.props.roundPosition === 2 && this.props.matchPosition === 1 ? [<Team/>, <Team/> ] : null}  */}
        {this.props.roundPosition !== 0 ? this.addWinnerToNextRound() : null}
      
      
      </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teamsTest.winner
})

const mapDispatch = (dispatch) => ({
  getWinner: (t,p)=>dispatch(getWinner(t,p))
})

export default connect(mapState, mapDispatch)(Match)
