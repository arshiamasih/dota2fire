import { ADD_WINNERS, GET_TEAMS } from "./types";

const initialState = {
  teams: [],
  winner: {
    one: {
      win: false,
      0: null,
      1: null
    },
    two: {
      win: false,
      0: null,
      1: null
    },
    three: {
      win: false,
      0: null,
      1: null
    },
    four: {
      win: false,
      0: null,
      1: null
    },
  }
}

//object.assign?
const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:    
      return  {
        ...state,
        winner: {
          ...state.winner,
          [action.pos]: {
            ...state.winner.one,
            [action.key]: action.payload.winner,
            win: true
          },
          [action.pos]: {
            ...state.winner.two,
            [action.key]: action.payload.winner,
            win: true
          },
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