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
