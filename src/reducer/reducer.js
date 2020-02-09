import { ADD_WINNERS, GET_TEAMS, CREATE_GAME, CALL_API, RECEIVE_API, GET_PLAYERS, CLOSE_MODAL } from "./types";


const initialState = {
  apiStatus: {
    teams: null,
    players: null
  },
  modalExpand: false,
  teams: [],
  players: {
    team: null,
    names:[]
  },
  currRound: 0,
  winner: {},
  gameNum: {
    n: 0,
    num: 0,
    start: false
  }
}

const teamReducer=(state = initialState, action) => {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          [action.call]: action.payload
        }
      } 
    case RECEIVE_API:
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          [action.call]: action.payload
        }
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
    console.log('in reducer', action.payload)
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
      modalExpand: true,
      players: Object.assign({}, {
        ...action.payload
      })
    }; 
    case CLOSE_MODAL: 
    return {
      ...state,
      modalExpand: action.payload,
    };     
    default:
      return state;  
  }
}
export default teamReducer