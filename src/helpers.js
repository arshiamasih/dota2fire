// EXPLANATION OF CORE LOGIC

// //DEFINES CALCULATIONS: enter num of teams below
// const defineParams = (n) => {
//   const num = n*2
//   return {
//     n,
//     num
//   }
// }

// //*****DEFINE GAME HERE : ENTER # OF TEAMS!*****//
// export const defineTeamNum = defineParams(16)


// //CREATES STRUCTURE IN REDUX STATE
//  DYNAMICALLY UPDATES IN REDUX 
// const createStructure = () => {
//   const arr = createMatchesHash([], defineTeamNum.n, Math.log2(defineTeamNum.n))
//   const obj = {0: []}
//   for(let i =0; i < arr.length; i++) {
//       obj[i+1] = {matches:arr[i]}
//   }
//   return obj
// }

// //helper for createStructure
// const createMatchesHash = (arr = [], n, i ) => {
//   //base case
//   if(arr.length === i) return arr
//   else {
//    n /=2 
//    const node = {}
//    for(let i = 0; i < n; i++) {
//      node[i] = {
//        win: false,
//        name: null
//      }
//    }
//    arr.push(node) 
//    return createMatchesHash(arr, n, i ) 
//   }

// }

// export const structure = createStructure()



