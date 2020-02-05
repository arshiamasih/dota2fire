import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'


class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      currRound: 0
    }
}

  createInitialPairedTeams(){
    //const teams = [...this.props.teams]
    //console.log('MATCH', teams)
    return this.props.teams.splice(0,2).map((team, i) => {
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
 addWinnerToNextRound(){
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
 



  //////////////////////////////////////////
    //need a current and next round prop
    // let currRound = this.state.currRound
    // console.log(this.props.winner[currRound].winningTeams.length)
    // if(this.props.winner[currRound].winningTeams.length === 4) {
    //   this.setState({currRound: 1})
    // }
    const arr = []
    const team = 'team'
    const win = 'win'
    //const currRound = 1
    //previous round
    //const nextRound = currRound+1
    const winners = {...this.props.winner}
    console.log('WINNERS FROM STATE', winners)
    //const winner = winners[0]
    //const rounds = Object.keys(winner)  
    //winner[current]
    const matches = Object.keys(winners[0])
    console.log('length of matches', matches)
    
    // for(let i = 0; i < matches.length-1; i++) {
    //   let name = winner[i][win]? winner[i][team] : null
    //   arr.push(<Team 
    //     name={name}
    //     id={0} 
    //     matchPosition={this.props.matchPosition}
    //     roundPosition={this.props.roundPosition}
    //     selectWinner={this.selectWinner}/>)
    // }
    // console.log(arr)

    // //splice
    // const hashy = {}
    // for(let i = 0; i < arr.length; i++) {
    //   hashy[i] = arr.splice(0,2)
    // }

    //console.log('HASHY', hashy)
    
 

    // const hash = {
    //  0:{ 
    //    0: 
    //         [<Team 
    //         name={winners[0][0][team]}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> , 
    //         <Team 
    //         name={winners[0][1][team] }
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ],
    //     1: 
    //         [<Team 
    //         name={winners[0][2]? winners[0][2][team] : null}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/>, 
    //         <Team 
    //         name={winners[0][3] ? winners[0][3][team] : null}
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ],
    //     2:  [<Team 
    //         name={winners[0][4]? winners[0][4][team] : null}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/>, 
    //         <Team 
    //         name={winners[0][5] ? winners[0][5][team] : null}
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ],
    //     3:    
    //         [<Team 
    //         name={winners[0][6]? winners[0][6][team] : null}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/>, 
    //         <Team 
    //         name={winners[0][7] ? winners[0][7][team] : null}
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ]    
    //     },

    // 1:
    //   { 
    //     0: 
    //         [<Team 
    //         name={ winners[1][0][team]}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> , 
    //         <Team 
    //         name={winners[1][1][team]}
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ],
    //     1: 
    //         [<Team 
    //         name={ winners[1][2][team]}
    //         id={0} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> , 
    //         <Team 
    //         name={winners[1][3][team]}
    //         id={1} 
    //         matchPosition={this.props.matchPosition}
    //         roundPosition={this.props.roundPosition}
    //         selectWinner={this.selectWinner}/> ],  
    //     },
    // 2: 
    //      { 0: [<Team 
    //       name={ winners[2][0][team]}
    //       id={0} 
    //       matchPosition={this.props.matchPosition}
    //       roundPosition={this.props.roundPosition}
    //       selectWinner={this.selectWinner}/> , 
    //       <Team 
    //       name={winners[2][1][team]}
    //       id={1} 
    //       matchPosition={this.props.matchPosition}
    //       roundPosition={this.props.roundPosition}
    //       selectWinner={this.selectWinner}/> ]  
    //       } 
    // }

    // console.log(hash)
    // //HARD CODED - MAKE MORE DYNAMIC

    // if(this.props.roundPosition === 1 && this.props.matchPosition === 0) {
    //   return hash[0][0]
    // }

    // if(this.props.roundPosition === 1 && this.props.matchPosition === 1) {
    //   return hash[0][1]
    // }

    // if(this.props.roundPosition === 1 && this.props.matchPosition === 2) {
    //   return hash[0][2]
    // }

    // if(this.props.roundPosition === 1 && this.props.matchPosition === 3) {
    //   return hash[0][3]
    // }

    // //next round
    // if(this.props.roundPosition === 2 && this.props.matchPosition === 0) {
    //   return hash[1][0]
    // }

    // if(this.props.roundPosition === 2 && this.props.matchPosition === 1) {
    //   return hash[1][1]
    // }

    // //next round
    // if(this.props.roundPosition === 3 && this.props.matchPosition === 0) {
    //   return hash[2][0]
    // }



      //THIS REPLACES DATA - too dynamic lol
      // for(let i = 0; i < matches.length/2; i++) {
      //   if(this.props.roundPosition === nextRound && this.props.matchPosition === i){
      //     return hash[currRound][i]
      //   }
      // }

  }


  selectWinner = async (event) =>{
    event.preventDefault()
    const {roundPosition, matchPosition} = {...this.props}
    const {id, name} = event.target


   await this.setState({
      [id]: name,
      round: roundPosition,
      match: matchPosition,
      nextRound: roundPosition + 1,
    })
    this.props.getWinner(this.state.round, this.state.match, this.state[id])


  }

  render() {
    const seedRound = 0

    return (
      <div className={'match'}>
      <p style={{fontSize: '10px'}}>{this.props.position}</p> 
        {this.createInitialPairedTeams()}
        {/* {this.props.roundPosition !== seedRound ? this.addWinnerToNextRound() : null} */}
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