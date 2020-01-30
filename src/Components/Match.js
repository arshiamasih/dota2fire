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
   
  }

  render() {
    const teams = [...this.props.teams.teams]

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
      
        {this.props.roundPosition === 0 ? this.createInitialPairedTeams(teams) : null}

      {/* HARD CODED LOGIC FOR INDEXING -> UPDATE THIS WITH DYNAMIC FUNCTION HELPER */}
      {this.props.roundPosition === 1 && this.props.matchPosition === 0 ? [<Team/>, <Team/> ]: null}
      {this.props.roundPosition === 1 && this.props.matchPosition === 1 ? [<Team/>, <Team/> ] : null} 
      {this.props.roundPosition === 2 && this.props.matchPosition === 0 ? [<Team/>, <Team/> ]: null}
      {this.props.roundPosition === 2 && this.props.matchPosition === 1 ? [<Team/>, <Team/> ] : null} 
      
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  getWinner: (t,p)=>dispatch(getWinner(t,p))
})

export default connect(null, mapDispatch)(Match)
