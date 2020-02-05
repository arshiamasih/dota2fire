import { ADD_WINNERS, GET_TEAMS } from "./types";
import { structure } from '../helpers'

const initialState = {
  teams: [],
  teamPlayers: [],
  currRound: 0,
  winner: structure
}

const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:    

      return  {
        ...state,
        winner: {
          ...state.winner,  
        [action.round]: {
            ...state.winner[action.round],
            matches: {
            ...state.winner[action.round].matches,
            [action.match]: Object.assign({},{ 
            name: action.payload.round,
            win: true
           })},
         },
        }
      };
    case GET_TEAMS: 
      return {
        ...state,
        teams: action.payload,
        winner: {
          ...state.winner,
          0: action.payload
        }
      };  
    default:
      return state;  
  }
}
export default teamReducer