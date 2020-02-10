import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayers } from '../reducer/actions'


const Ruler = (props) => {
  //create a 'ruler' where user can click for team info
  const handleOnClick = async (event) =>{
    const { id, name } = event.target  
    this.props.getPlayers(id, name)
  }


    const { teams } = {...props}
    return (
      <div className={'player-ruler'}>
      <div className={'team-details'}>
          {teams.map(el => {
            return <div >
              <button 
              className={'team-details-btn'}
              onClick={event=> handleOnClick(event)}
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

const mapState = (state) => ({
  gameNum: state.teams.gameNum,
  teams: state.teams.teams,
  apiStatus: state.teams.apiStatus
})

const mapDispatch = (dispatch) => ({
  getPlayers: (id,  name)=>dispatch(getPlayers(id,  name))
})

export default connect(mapState, mapDispatch)(Ruler)