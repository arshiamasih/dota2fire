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
      names: [],
      expand: false
    }
  }

  handleOnClick=(event)=>{
    for(let i = 0; i < this.props.players.length; i++) {
      if(event.target.id === this.props.players[i]['name']) {
        console.log(event.target.id, this.props.players.name)
        this.setState({
          names: this.props.players[i]['players'],
          expand: !this.state.expand

        })
      }
     
    }

  }

  render() {
    console.log('ruler RENDER', this.props)
    const { players } = {...this.props}
    return (
      <div >
      <div><p>Team Details</p></div>
      {this.props.apiStatus.status === 'success' ?  <div className={'team-details'}>
          {players.map((el,i) => {
            return <div >
              <button 
              className={'team-details-btn'}
              onClick={event=>this.handleOnClick(event)}
              id={el.name} 
              name={el.name} 
              expand={this.state.expand}
              players={el.players}>
              {el.name}</button>
        
              </div>
          })}
      </div> : <Loading/>}

       
        {this.state.expand? <div className={'name-details'}>{this.state.names.map(name=>{
            return <p>{name}</p>
          })}</div> : null}
       
      </div>
    )
  }
}

const mapState = (state) => {
  return {

    gameNum: state.teams.gameNum,
    players: state.teams.players,
    apiStatus: state.teams.apiStatus
  }
}

const mapDispatch = (dispatch) => ({
  getPlayers: (n)=>dispatch(getPlayers(n))
})

export default connect(mapState, mapDispatch)(Ruler)