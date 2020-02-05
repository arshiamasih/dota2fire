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

    const teams = [...this.props.teams.teams]
    const winner = {...this.props.winner}

      const matches = {
      0: teams,
      1: Object.values(winner[0]['matches']),
      2: Object.values(winner[1]['matches']),
      3: Object.values(winner[2]['matches'])
    }
    
    const arr =  [...Array(numTeams)].map((_, i) => {
      console.log('testing round match assignment', matches[i])
      return <div><Round 
      key={i}
      teams={null}
      roundPosition={i} 
      matches={matches[i]}
      numMatches={matchCalculation /= 2}/></div>
    });

    return arr
  }

  // updateRounds = (n) => {
  //   const winner = {...this.props.winner}
  //   let matchCalculation = n
  //   const matchesTest = {
  //      0: winner[0].matches,
  //      1: winner[1].matches,
  //      2: winner[2].matches,
  //  }

  //  console.log('MATCHES TEST', matchesTest)

  //  //matches = {matches[i]}
  //   const arr =  [...Array(3)].map((_, i) => {
  //     return <div><Round 
  //     key={i}
  //     roundPosition={i} 
  //     matches={matchesTest[i]}
  //     numMatches={matchCalculation /= 2}/></div>
  //   });

  //   return arr

  // }
  render(){
   const numTeams = defineTeamNum.num
   return( 
    <div className={'bracket'}>
      {this.createRounds(numTeams)}

    </div>
   )
  }
}

const mapState = (state) => {
  return {
    teams: state.teams,
    winner: state.teams.winner
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
      {match: [{name:null},{name:null },{name:null},{name:null},{name:null},{name:null},{name:null},{name:null}],
        matches: {
        0: {
          win: false,
          name: null
        },
        1: {

          win: false,
          name: null
        },
        2: {
          win: false,
          name: null
        },
        3: {
          win: false,
          name: null
        },
        4: {
          win: false,
          name: null
        },
        5: {
          win: false,
          name: null
        },
        6: {
          win: false,
          name: null
        },
        7: {
          win: false,
          name: null
        },
      },
    },
    1: 
      {match:[{name:'b'},{name:null},{name:null},{name:null}]
      ,
        matches: {0: {
          win: false,
          name: null
        },
        1: {
          win: false,
          name: null
        },
        2: {
          win: false,
          name: null
        },
        3: {
          win: false,
          name: null
        },
      },
    },
     2: {  match: [{name:null},{name:null}],   
       matches:{0: 
       {
        win: false,
        name: null
       },
      1: {
        win: false,
        name: null
      },
    }
    }
  }
  console.log(winner)
  return winner
}

export const structure = createStructure(defineTeamNum.num)

