import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
        const {one, two} = {...this.props.winner}
   
        arr[0] = <Team 
          name={one.win? one[0] || one[1] : null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> 
        arr[1] = <Team 
          name={two.win? two[0] || two[1]: null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/>     
      }


    if(this.props.roundPosition === 1 && this.props.matchPosition === 1 ) {
        const {three, four} = this.props.winner
   
        arr[0] = <Team 
          name={three.win? three[0] || three[1] : null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> 
        arr[1] = <Team 
          name={four.win? four[0] || four[1]: null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/>     
      }
  

      //is there a way to clear state once all are complete??
      if(this.props.roundPosition === 2 && this.props.matchPosition === 0 ) {
      }

    return arr
  }


  selectWinner = async (event) =>{
    event.preventDefault()
    const {matchPosition} = {...this.props}
    const {id, name} = event.target
    await this.setState({
      [id]: name,
      match: matchPosition
    })
    this.props.getWinner(this.state.match, this.state[id], id)
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
  getWinner: (p,n,k)=>dispatch(getWinner(p,n,k))
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