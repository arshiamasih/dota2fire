import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayers } from '../reducer/actions'


class Ruler extends Component {
  //create a 'ruler' where user can click for team info
  handleOnClick = async (event) =>{
    const { id, name } = event.target  
    this.props.getPlayers(id, name)
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
              >
              {el.name}        
              </button>
              </div>
          })}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', padding: '1em'}}>
        <div></div><p><code>discover the players</code></p></div>
      </div>
    )
  }
}

const mapState = (state) => ({
  gameNum: state.teams.gameNum,
  teams: state.teams.teams,
  apiStatus: state.teams.apiStatus
})

const mapDispatch = (dispatch) => ({
  getPlayers: (id,  name)=>dispatch(getPlayers(id,  name))
})

export default connect(mapState, mapDispatch)(Ruler)