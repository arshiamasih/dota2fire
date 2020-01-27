import { ADD_WINNERS, GET_TEAMS } from "./types";

const initialState = {
  teams: []
}
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:
      return {
        ...state
      };
    case GET_TEAMS:
      console.log('test reducer', state)
      return {
        teams: action.payload.teams
      };  
    default:
      return state;  
  }

}



export default teamReducer