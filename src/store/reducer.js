import { ADD_WINNERS } from "./types";

const initialState = {
  rounds: {
    winners: []
  }
}
const reducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_WINNERS:
      return {
        ...state
      };
      default:
        return state;  
  }

}

export default reducer