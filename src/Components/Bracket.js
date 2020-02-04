import React from 'react'
import Round from './Round'
import Team from './Team'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'

//changes the # teams to dynamically update rounds & brackets & # of teams
//must be tournament a valid value (4, 8, 16, 32)
//set at 8 for testing
export const defineTeamNum = {
  num: 16
}

class Bracket extends React.Component {

  async componentDidMount(){  
   this.props.getTeams(defineTeamNum.num)
  }

  createRounds = (n) => {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    //should not use index for key & position
    const arr =  [...Array(numTeams)].map((_, i) => {
      return <div><Round 
      key={i}
      teams={this.props.teams}
      roundPosition={i} 
      matches={null}
      numMatches={matchCalculation /= 2}/></div>
    });

    return arr
  }

  updateRounds = (n) => {
    const winner = {...this.props.winner}
    let matchCalculation = n
    const matchesTest = {
       0: winner[0].matches,
       1: winner[1].matches,
       2: winner[2].matches,
   }

   console.log('MATCHES TEST', matchesTest)

   //matches = {matches[i]}
    const arr =  [...Array(3)].map((_, i) => {
      return <div><Round 
      key={i}
      roundPosition={i} 
      matches={matchesTest[i]}
      numMatches={matchCalculation /= 2}/></div>
    });

    return arr

  }
  render(){
   const numTeams = defineTeamNum.num
   return( 
    <div className={'bracket'}>
      {this.createRounds(numTeams)}
      {this.updateRounds(numTeams)}
    </div>
   )
  }
}

const mapState = (state) => {
  return {
    teams: state.teams
  }
}

const mapDispatch = (dispatch) => ({
  getTeams: (n)=>dispatch(getTeams(n))
})

export default connect(mapState, mapDispatch)(Bracket)

const createStructure = (num) => {
  const hash = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8
  }
  let arr = Object.values(hash)
  arr = arr.slice(0,num/2)
  const match = {
    win: false,
    team: null,
  }
  const obj = arr.reduce((obj, el) =>{
    obj[el] = match
    return obj
  }, {} )

  console.log(obj)
  //return obj

  const winner = {
    0: 
      {matches: {
        0: [[ <Team 
          name={null}
          id={0} 
          matchPosition={!this.props.matchPosition ?  null: this.props.matchPosition }
          roundPosition={this.props.roundPosition ? this.props.roundPosition : null}
          selectWinner={this.selectWinner ? this.selectWinner : null}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]],
        1: [[ <Team 
          name={null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]],
        2: [[ <Team 
          name={null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]],
        3: [[ <Team 
          name={null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]]
      },
        0: {
          win: false,
          team: null
        },
        1: {

          win: false,
          team: null
        },
        2: {
          win: false,
          team: null
        },
        3: {
          win: false,
          team: null
        },
        4: {
          win: false,
          team: null
        },
        5: {
          win: false,
          team: null
        },
        6: {
          win: false,
          team: null
        },
        7: {
          win: false,
          team: null
        },
      },
    1: 
      {matches:{
        0: [[ <Team 
          name={null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]],
        1: [[ <Team 
          name={null}
          id={0} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> , 
          <Team 
          name={null}
          id={1} 
          matchPosition={this.props.matchPosition}
          roundPosition={this.props.roundPosition}
          selectWinner={this.selectWinner}/> ]],
      },
        0: {
          win: false,
          team: null
        },
        1: {
          win: false,
          team: null
        },
        2: {
          win: false,
          team: null
        },
        3: {
          win: false,
          team: null
        },
      },
     2: {  matches: {
      0: [[ <Team 
        name={null}
        id={0} 
        matchPosition={this.props.matchPosition}
        roundPosition={this.props.roundPosition}
        selectWinner={this.selectWinner}/> , 
        <Team 
        name={null}
        id={1} 
        matchPosition={this.props.matchPosition}
        roundPosition={this.props.roundPosition}
        selectWinner={this.selectWinner}/> ]],
    },      
       0: 
       {
        win: false,
        team: null
       },
      1: {
        win: false,
        team: null
      },
    }
  }
  console.log(winner)
  return winner
}

export const structure = createStructure(defineTeamNum.num)



  // {
  //   win: false,
  //   0: null,
  //   1: null
  // }


 [ <Team 
    name={null}
    id={0} 
    matchPosition={this.props.matchPosition}
    roundPosition={this.props.roundPosition}
    selectWinner={this.selectWinner}/> , 
    <Team 
    name={null}
    id={1} 
    matchPosition={this.props.matchPosition}
    roundPosition={this.props.roundPosition}
    selectWinner={this.selectWinner}/> ]