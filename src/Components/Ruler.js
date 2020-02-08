//get team player details
//create a 'ruler' where user can hover for team info
import React from 'react'
import { connect } from 'react-redux'
import {getTeams} from '../store/actions'


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
    //loop through players
    //if event.target.id === players.name
    //expand true
    //
    

    for(let i = 0; i < this.state.players.length; i++) {
      if(event.target.id === this.state.players[i]['name']) {
        console.log(event.target.id, this.state.players.name)
        this.setState({
          names: this.state.players[i]['players'],
          expand: !this.state.expand

        })
      }
     
    }
  
    console.log('test',this.state)
  }

  handleClose=()=> {
    this.setState({
      anchor:null
    })
  }

  async componentDidMount(){
    const { gameNum } = this.props
    const response = await fetch('https://api.opendota.com/api/teams')
    const data = await response.json()

    const teams = data.slice(0,gameNum.n);
    const players = []
    for(let i =0; i < teams.length; i++) {
      const responseID = await fetch(`https://api.opendota.com/api/teams/${teams[i]['team_id']}/players`)
      const dataID = await responseID.json()

      const obj = {
        name: teams[i]['name'],
        players: dataID.map(player => player.name)
      }
      players.push(obj)
    }

    this.setState({
      players: players
    })
}  
  render() {
    const { players } = this.state
    return (
      <div >
      <div><p>Team Details</p></div>
      <div className={'team-details'}>
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
      </div>
        {this.state.expand? <div className={'name-details'}>{this.state.names.map(name=>{
            return <p>{name}</p>
          })}</div> : null}
       
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    teams: state.teams,
    winner: state.teams.winner,
    gameNum: state.teams.gameNum
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Ruler)