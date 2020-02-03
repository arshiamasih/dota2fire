import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      matchPosition: null,
      currRound: 0,
      nextRound: 1,
      winningTeams: []
    }
}

  createInitialPairedTeams(){
    const teams = [...this.props.teams]
    return teams.map((team, i) => {
      return (
      <div key={i}>
        <Team
          id={i}
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
 addWinnerToNextRound(){

    const arr = []
    const team = 'team'
    const win = 'win'
    const winner = {...this.props.winner}
    console.log('test', winner[0][0], winner[0][1], winner[0][2], winner[0][3]) 


      if(this.props.roundPosition === 1 && this.props.matchPosition === 0 ) {
          arr[0] = <Team 
            name={winner[0][0][win]? winner[0][0][team] : null}
            id={0} 
            matchPosition={this.props.matchPosition}
            roundPosition={this.props.roundPosition}
            selectWinner={this.selectWinner}/> 
          arr[1] = <Team 
            name={winner[0][1][win]? winner[0][1][team] : null}
            id={1} 
            matchPosition={this.props.matchPosition}
            roundPosition={this.props.roundPosition}
            selectWinner={this.selectWinner}/>  
      }


    if(this.props.roundPosition === 1 && this.props.matchPosition === 1 ) {
        arr[0] = <Team 
          name={winner[0][2][win]? winner[0][2][team] : null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> 
        arr[1] = <Team 
          name={winner[0][3][win]? winner[0][3][team]: null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/>     
      }
  

    //   //is there a way to clear state once all are complete??
    //   if(this.props.roundPosition === 2 && this.props.matchPosition === 0 ) {
    //   }

    return arr
  }


  selectWinner = async (event) =>{
    event.preventDefault()
    const {roundPosition, matchPosition} = {...this.props}
    const {id, name} = event.target
    await this.setState({
      [id]: name,
      round: roundPosition,
      match: matchPosition
    })
    this.props.getWinner(this.state.round, this.state.match, this.state[id])

  }

  render() {
    const seedRound = 0

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
        {this.props.roundPosition === seedRound ? this.createInitialPairedTeams(): null}
        {this.props.roundPosition !== seedRound ? this.addWinnerToNextRound() : null}
      </div>
    )
  }
}

const mapState = (state) => ({
  winner: state.teams.winner,

})
const mapDispatch = (dispatch) => ({
  getWinner: (round, match, name)=>dispatch(getWinner(round, match, name))
})

export default connect(mapState, mapDispatch)(Match)

//REDUX STATE FOR INDEXING
  // const {roundPosition, matchPosition} = {...this.props}
  // const position =  {
  //   round: roundPosition,
  //   match: matchPosition,
  //   team: id
  // }
  //  await this.setState({
  //   name: name, 
  //   positions: position
  // })
  // this.props.getWinner(this.state.name, this.state.positions)