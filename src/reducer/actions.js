import {ADD_WINNERS, GET_TEAMS, CREATE_GAME, CALL_API, RECEIVE_API, GET_PLAYERS, CLOSE_MODAL} from './types'

export const requestAPI = (call) => ({
  type: CALL_API,
  payload: 'pending',
  call
  
})

export const receiveAPI = (call) => ({
  type: RECEIVE_API,
  payload: 'success',
  call
})

export const hideModal = () => ({
  type: CLOSE_MODAL, 
  payload: false
  
})

export const addWinners = (round, match, winner) => 
({ 
    type: ADD_WINNERS,
    payload: {
      round : winner
    },
    round: round+1,
    match
  })

export const fetchTeamData = (teams) => 
  ({
    type: GET_TEAMS,
    payload: teams
  })


export const fetchTeamPlayers = (players, name) => 
({
  type: GET_PLAYERS,
  payload: {
    team: name, 
    names: players
  },
  modalExpand: true
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
  return dispatch(createGame(n, structure))
}
export const getTeams = (num) => async (dispatch) => {
  //API ALREADY RANKS BY ELO SCORE
  //remove the no name team member
  //add try catch
  const type = 'teams'
  try {
    dispatch(requestAPI(type))
    const response = await fetch('https://api.opendota.com/api/teams')
    const data = await response.json()
    dispatch(receiveAPI(type))
    const teams = data.slice(0,num);
    console.log('teams in actions', teams)
    teams.map(team => {
      if(team.name === '') {
        team.name = 'noName'
      }
    })


    return dispatch(fetchTeamData(teams))
  }
  catch (error) {
    //dispatch server failure
  }
}


export const getPlayers = (id, name) => async (dispatch) => {
  const type = 'players'
  try {
    dispatch(requestAPI(type))
    const response = await fetch(`https://api.opendota.com/api/teams/${id}/players`)
    const data= await response.json()
    dispatch(receiveAPI(type))
    const players= data.map(team => team.name)
    return dispatch(fetchTeamPlayers(players, name))
  } 
  catch (error) {
    //dispatch server failure
  }
  

}

export const closeModal = () => async (dispatch) => {
  return dispatch(hideModal())
}

export const getWinner = (round, match, winner) => async (dispatch) => {
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

const createSeedRound = (teams) => {
  //teams is an array
  //take first and last
  //flatten array
}





