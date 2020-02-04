import { ADD_WINNERS, GET_TEAMS } from "./types";
import { structure } from '../Components/Bracket'

//const helper function depending on how many rounds/matches
//is there a better more dynamic structure??
//refer to helper.js for visual of data structure
//const winner = createStructure()

const initialState = {
  teams: [],
  teamPlayers: [],
  currRound: 0,
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
        [action.round]: {
            ...state.winner[action.round],
            // winningTeams: [...state.winner[action.round]['winningTeams'], action.payload.round],
            [action.match]: Object.assign({},{ 
            team: action.payload.round,
            win: true
           }),
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