import React from 'react'
import Round from './Round'
import { connect } from 'react-redux'
import { getTeams } from '../store/actions'

//changes the # teams to dynamically update rounds & brackets & # of teams
//must be tournament a valid value (4, 8, 16, 32)
//set at 8 for testing
export const defineTeamNum = {
  num: 8
}

class Bracket extends React.Component {

  async componentDidMount(){  
   this.props.getTeams(defineTeamNum.num)
  }

  createRounds = (n) => {
    const numTeams =  Math.log2(n)
    let matchCalculation = n
    //should not use index for key & position
    return [...Array(numTeams)].map((_, i) => {
      return <div><Round 
      key={i}
      teams={this.props.teams}
      roundPosition={i} 
      numMatches={matchCalculation /= 2}/></div>
    });
  }
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
    0: null,
    1: null
  }
  const obj = arr.reduce((obj, el) =>{
    obj[el] = match
    return obj
  }, {} )

  console.log(obj)
  return obj
}

export const structure = createStructure(defineTeamNum.num)

  // const winner =  {
  //   one:{ 
  //     one: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     two: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     three: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     four: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //   two:{ 
  //       one: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },
  //       two: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },  
  //     },
  //   three:{ 
  //       one: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },
  //       two: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },  
  //     }    
  //   }
  // }