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
      round: '',
      match: null,
      team: null
    }
  }
  this.selectWinner = this.selectWinner.bind(this)
}

  //this logic doesn't totaly make sense here.
  createInitialPairedTeams(teams){

   //gets team data from props and executes this.
    const teamsProps = [...teams]
    const teamsCopy = [...teams]
  
    return teamsCopy.splice(0,2).map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
          // teams={teamsProps}
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          teamName={team['name']}
          isWinner={team.isWinner}
          selectWinner={this.selectWinner}
    />
          
      </div> )
      })
   
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
      positions: position
    })
    
    //this.props.getWinner(this.state.name, this.state.positions)
    console.log('SELECT WINNER', this.state.positions)
   
  }

  render() {
    //const { teams }  = this.props.teams
    const teams = [...this.props.teams.teams]
    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
    
      {this.props.roundPosition === 0 ? this.createInitialPairedTeams(teams) : null}

      {/* HARD CODED LOGIC TO TEST WINNER POSITION */}
      {this.props.roundPosition === 1 && this.props.matchPosition === 0 ? <p>hi</p> : null}
      {this.props.roundPosition === 1 && this.props.matchPosition === 1 ? <p>bye</p> : null} 
    
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  getWinner: (t, p)=>dispatch(getWinner(t , p))
})

export default connect(null, mapDispatch)(Match)
