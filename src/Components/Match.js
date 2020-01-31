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

     //HARD CODED LOGIC - update with correct mapping
      if(this.props.roundPosition === 1 && this.props.matchPosition === 0 ) {
        arr[0] = <Team 
          name={this.props.winner.win? this.props.winner[0]: null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> 
        arr[1] = <Team 
          name={this.props.winner.win? this.props.winner[1]: null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/>     
      }
    
    // } 
    return arr
  }

  selectWinner = async (event) =>{
    event.preventDefault()
    const {id, name} = event.target
    await this.setState({
      [id]: name
    })
    this.props.getWinner(this.state[id], id)
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
  getWinner: (t,p)=>dispatch(getWinner(t,p))
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