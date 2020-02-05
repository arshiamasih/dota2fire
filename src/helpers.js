//helpers to define game parameters

export const defineTeamNum = {
  num: 8
}


//hard coded
const createStructure = () => {
  // const hash = {
  //   0: 0,
  //   1: 1,
  //   2: 2,
  //   3: 3,
  //   4: 4,
  //   5: 5,
  //   6: 6,
  //   7: 7,
  //   8: 8
  // }
  // let arr = Object.values(hash)
  // arr = arr.slice(0,num/2)
  // const match = {
  //   win: false,
  //   name: null,
  // }
  // const obj = arr.reduce((obj, el) =>{
  //   obj[el] = match
  //   return obj
  // }, {} )



  const winner = {
    0: 
      {
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
      {
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
      },
    },
     2: {   
       matches:{
         0: 
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
  return winner
}

export const structure = createStructure()


