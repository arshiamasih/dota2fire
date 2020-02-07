import {ADD_WINNERS, GET_TEAMS, CREATE_GAME} from './types'
export const addWinners = (round, match, winner) => {

return { 
    type: ADD_WINNERS,
    payload: {
      round : winner
    },
    round: round+1,
    match
  }
}



export const fetchTeamData = (teams) => 
  ({
    type: GET_TEAMS,
    payload: teams
  })

export const createGame = (n, structure) => 
  ({
    type: CREATE_GAME,
    payload: 
     {
      n,
      num: n*2,
      start: true
    },
    structure
  })

export const getGameNum = (n) => async (dispatch) =>{
  const structure = createStructure(n)
  console.log(structure)
  return dispatch(createGame(n, structure))
}
export const getTeams = (num) => async (dispatch) => {
  //API ALREADY RANKS BY ELO SCORE
  //remove the no name team member
  const response = await fetch('https://api.opendota.com/api/teams')
  const data = await response.json()
  const teams = data.slice(0,num);
  return dispatch(fetchTeamData(teams))
}

export const getWinner = (round, match, winner) => async (dispatch) => {
  console.log('action wtfff', round, match, winner)
  return dispatch(addWinners(round, match, winner))
}



const createStructure = (n) => {
  const arr = createMatchesHash([], n, Math.log2(n))
  const obj = {0: []}
  for(let i =0; i < arr.length; i++) {
      obj[i+1] = {matches:arr[i]}
  }
  return obj
}

//helper for createStructure
const createMatchesHash = (arr = [], n, i ) => {
  //base case
  if(arr.length === i) return arr
  else {
   n /=2 
   const node = {}
   for(let i = 0; i < n; i++) {
     node[i] = {
       win: false,
       name: null
     }
   }
   arr.push(node) 
   return createMatchesHash(arr, n, i ) 
  }

}





