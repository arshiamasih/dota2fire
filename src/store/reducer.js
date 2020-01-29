import { ADD_WINNERS, GET_TEAMS } from "./types";

const initialState = {
  teams: [],
  winner: {}
}
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:
      return {
        ...state,
        winners: 'testing winner data'
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