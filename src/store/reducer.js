import { ADD_WINNERS, GET_TEAMS } from "./types";
import { structure } from '../Components/Bracket'

//const helper function depending on how many rounds/matches
//is there a better more dynamic structure??
//refer to helper.js for visual of data structure
//const winner = createStructure()

const initialState = {
  teams: [],
  teamPlayers: [],
  winner: structure
}


//object.assign?
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:    
      return  {
        ...state,
        winner: {
          ...state.winner,
          [action.pos]: Object.assign({},{
            ...state.winner.one,
            [action.key]: action.payload.winner,
            win: true
          }),
          [action.pos]: Object.assign({},{
            ...state.winner.two,
            [action.key]: action.payload.winner,
            win: true
          }),
          [action.pos]: {
            ...state.winner.three,
            [action.key]: action.payload.winner,
            win: true
          },
          [action.pos]: {
            ...state.winner.four,
            [action.key]: action.payload.winner,
            win: true
          },
       
        }
      };
    case GET_TEAMS: 
      return {
        ...state,
        teams: action.payload
      };  
    default:
      return state;  
  }
}
export default teamReducer


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