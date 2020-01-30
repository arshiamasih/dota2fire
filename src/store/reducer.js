import { ADD_WINNERS, GET_TEAMS } from "./types";

const initialState = {
  teams: [],
  winner: {}
}

//object.assign?
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:
      return {
        ...state,
        winner: action.payload
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