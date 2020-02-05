//helpers to define game parameters

//DEFINES CALCULATIONS
const defineParams = (n) => {
  const num = n*2
  return {
    n,
    num
  }
}

//DEFINE GAME HERE : ENTER # OF TEAMS!
export const defineTeamNum = defineParams(16)


//CREATES STRUCTURE IN REDUX STATE
const createStructure = () => {
  const arr = createMatchesHash([], defineTeamNum.n, Math.log2(defineTeamNum.n))
  const obj = {0: []}
  for(let i =0; i < arr.length; i++) {
      obj[i+1] = {matches:arr[i]}
  }
  console.log(obj)
  return obj
}

const createMatchesHash = (arr = [], n, i ) => {
  //base case
  if(arr.length === i)
  return arr
  else {
   n /=2 
   const node = {}
   for(let i = 0; i < n; i++) {
     node[i] = {
       win: false,
       name: null
     }
   }
   arr.push(node) 
   return createMatchesHash(arr, n, i ) 
  }

}

// const createStructure = () => {


//   const winner = {
//     0: [],
//     1: 
//       {
//         matches: {
//         0: {
//           win: false,
//           name: null
//         },
//         1: {
//           win: false,
//           name: null
//         },
//         2: {
//           win: false,
//           name: null
//         },
//         3: {
//           win: false,
//           name: null
//         },
//       },
//     },
//     2: 
//       {
//         matches: {
//         0: {
//           win: false,
//           name: null
//         },
//         1: {
//           win: false,
//           name: null
//         },
//       },
//     },
//      3: {   
//       matches:{
//         0: {
//           win: false,
//           name: null
//         },
//       }
//     },
//   }
//   return winner

  // const winner = {
  //   0: 
  //     {
  //       matches: {
  //       0: {
  //         win: false,
  //         name: null
  //       },
  //       1: {
  //         win: false,
  //         name: null
  //       },
  //       2: {
  //         win: false,
  //         name: null
  //       },
  //       3: {
  //         win: false,
  //         name: null
  //       },
  //       4: {
  //         win: false,
  //         name: null
  //       },
  //       5: {
  //         win: false,
  //         name: null
  //       },
  //       6: {
  //         win: false,
  //         name: null
  //       },
  //       7: {
  //         win: false,
  //         name: null
  //       },
  //     },
  //   },
  //   1: 
  //     {
  //       matches: {
  //       0: {
  //         win: false,
  //         name: null
  //       },
  //       1: {
  //         win: false,
  //         name: null
  //       },
  //       2: {
  //         win: false,
  //         name: null
  //       },
  //       3: {
  //         win: false,
  //         name: null
  //       },
  //     },
  //   },
  //    2: {   
  //     matches:{
  //       0: {
  //         win: false,
  //         name: null
  //       },
  //       1: {
  //         win: false,
  //         name: null
  //      },
  //     }
  //   },
  //   3:  {   
  //     matches:{
  //       0: {
  //         win: false,
  //         name: null
  //       },
  //     }
  //   }    
  // }
   //return winner
//}

export const structure = createStructure()


