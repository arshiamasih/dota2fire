//helpers to define game parameters

export const defineTeamNum = {
  num: 8
}


const createStructure = (num) => {
  const hash = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight'
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
  return obj
}

export const structure = createStructure(defineTeamNum.num)


// initial state looks like this
// const initialState = {
//   teams: [],
//   winner: {
//     0: {
//       win: false,
//       0: 'test',
//       1: 'test'
//     },
//     1: {
//       win: false,
//       0: null,
//       1: null
//     },
//     2: {
//       win: false,
//       0: null,
//       1: null
//     },
//     3: {
//       win: false,
//       0: null,
//       1: null
//     },
//   }
// }


  winner = {
    1: 
      {
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
    2: 
      {
        0: {
          win: false,
          team: null
        },
        1: {
          win: false,
          team: null
        },
      },
  }



//   const winner = {
//     0: 
//       {matches: {
//         0: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={null}
//           roundPosition={this.props.roundPosition ? this.props.roundPosition : null}
//           selectWinner={this.selectWinner ? this.selectWinner : null}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]],
//         1: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]],
//         2: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]],
//         3: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]]
//       },
//         0: {
//           win: false,
//           team: null
//         },
//         1: {

//           win: false,
//           team: null
//         },
//         2: {
//           win: false,
//           team: null
//         },
//         3: {
//           win: false,
//           team: null
//         },
//         4: {
//           win: false,
//           team: null
//         },
//         5: {
//           win: false,
//           team: null
//         },
//         6: {
//           win: false,
//           team: null
//         },
//         7: {
//           win: false,
//           team: null
//         },
//       },
//     1: 
//       {matches:{
//         0: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]],
//         1: [[ <Team 
//           name={null}
//           id={0} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> , 
//           <Team 
//           name={null}
//           id={1} 
//           matchPosition={this.props.matchPosition}
//           roundPosition={this.props.roundPosition}
//           selectWinner={this.selectWinner}/> ]],
//       },
//         0: {
//           win: false,
//           team: null
//         },
//         1: {
//           win: false,
//           team: null
//         },
//         2: {
//           win: false,
//           team: null
//         },
//         3: {
//           win: false,
//           team: null
//         },
//       },
//      2: {  matches: {
//       0: [[ <Team 
//         name={null}
//         id={0} 
//         matchPosition={this.props.matchPosition}
//         roundPosition={this.props.roundPosition}
//         selectWinner={this.selectWinner}/> , 
//         <Team 
//         name={null}
//         id={1} 
//         matchPosition={this.props.matchPosition}
//         roundPosition={this.props.roundPosition}
//         selectWinner={this.selectWinner}/> ]],
//     },      
//        0: 
//        {
//         win: false,
//         team: null
//        },
//       1: {
//         win: false,
//         team: null
//       },
//     }
//   }
//   console.log(winner)
//   return winner
// }

// export const structure = createStructure(defineTeamNum.num)


