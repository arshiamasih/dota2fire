import { ADD_WINNERS, GET_TEAMS, CREATE_GAME, CALL_API, RECEIVE_API, GET_PLAYERS } from "./types";
// import { structure } from '../helpers'
// console.log('in reducer', structure)

const initialState = {
  apiStatus: {
    status: null
  },
  teams: [],
  players: [],
  currRound: 0,
  winner: {},
  gameNum: {
    n: 16,
    num: 32,
    start: false
  }
}

const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        apiStatus: action.payload
      } 
      case RECEIVE_API:
        return {
          ...state,
          apiStatus: action.payload
      } 
    case CREATE_GAME: 
    return {
      ...state,
      gameNum: Object.assign({}, action.payload),
      winner: action.structure
    }
    case CREATE_GAME: 
    return {
      ...state,
      gameNum: Object.assign({}, action.payload),
      winner: action.structure
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
      case GET_PLAYERS: 
      return {
        ...state,
        players: action.payload
      };     
    default:
      return state;  
  }
}
export default teamReducer