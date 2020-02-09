//get team player details
//create a 'ruler' where user can hover for team info
import React from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import { getPlayers } from '../store/actions'


class Ruler extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      players: [],
    }
  }

  handleOnClick= async (event)=>{
    const { id} = event.target  
    const response = await fetch(`https://api.opendota.com/api/teams/${id}/players`)
    const data= await response.json()
    const players= data.map(team => team.name)
    console.log(players)
    this.props.getPlayers(players)
    this.setState({
      players: players,
      expand: !this.state.expand
    })

  }

  render() {
    const { teams } = {...this.props}
    return (
      <div className={'player-ruler'}>
     
      <div className={'team-details'}>
          {teams.map((el,i) => {
            return <div >
              <button 
              className={'team-details-btn'}
              onClick={event=>this.handleOnClick(event)}
              id={el['team_id']}
              name={el['name']} 
              expand={this.state.expand}>
              {el.name}        
              </button>
              </div>
          })}
      </div>
      <div><p>check out the team players</p></div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {

    gameNum: state.teams.gameNum,
    teams: state.teams.teams,
    apiStatus: state.teams.apiStatus
  }
}

const mapDispatch = (dispatch) => ({
  getPlayers: (n)=>dispatch(getPlayers(n))
})

export default connect(mapState, mapDispatch)(Ruler)