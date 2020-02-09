//get team player details
//create a 'ruler' where user can hover for team info
import React from 'react'
import { connect } from 'react-redux'
import info from '../info.png'
import { getPlayers } from '../reducer/actions'


class Ruler extends React.Component {

  handleOnClick = async (event)=>{
    const { id } = event.target  
    const response = await fetch(`https://api.opendota.com/api/teams/${id}/players`)
    const data= await response.json()
    const players= data.map(team => team.name)
    this.props.getPlayers(players)
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
        {/* <div><img src={info} style={{padding: '12.25px 5px 0 0'}}width={'25px'} height={'25px'}/></div> */}
        <div></div><p><code>discover the players</code></p></div>
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