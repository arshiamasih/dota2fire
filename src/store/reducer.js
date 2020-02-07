import { ADD_WINNERS, GET_TEAMS, CREATE_GAME } from "./types";
import { structure } from '../helpers'
import { getGameNum } from "./actions";

const initialState = {
  teams: [],
  teamPlayers: [],
  currRound: 0,
  winner: structure,
  gameNum: {
    n: 16,
    num: 32,
    start: false
  }
}

const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME: 
    console.log('REDUCER',action.payload)
    return {
      ...state,
      gameNum: Object.assign({}, action.payload),
      winner: structure
    }
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