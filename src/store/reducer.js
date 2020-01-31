import { ADD_WINNERS, GET_TEAMS } from "./types";

const initialState = {
  teams: [],
  winner: {
    win: false,
    0: null,
    1: null
  }
}

//object.assign?
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:    
      return {
        ...state,
        winner: {
          ...state.winner,
          [action.key]: action.payload.winner,
          win: true
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