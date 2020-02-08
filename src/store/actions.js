import {ADD_WINNERS, GET_TEAMS, CREATE_GAME, CALL_API, RECEIVE_API, GET_PLAYERS} from './types'

export const requestAPI = () => ({
  type: CALL_API,
  payload: {
    status: 'pending'
  }
  
})

export const receiveAPI = () => ({
  type: RECEIVE_API,
  payload: {
    status: 'success'
  }
  
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


export const fetchTeamPlayers = (players) => 
({
  type: GET_PLAYERS,
  payload: players
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
  dispatch(requestAPI())
  const response = await fetch('https://api.opendota.com/api/teams')
  const data = await response.json()
  dispatch(receiveAPI())
  const teams = data.slice(0,num);
  return dispatch(fetchTeamData(teams))
}


export const getPlayers = (num) => async (dispatch) => {
  //API ALREADY RANKS BY ELO SCORE
  //remove the no name team member
  try {
  dispatch(requestAPI())
  const response = await fetch('https://api.opendota.com/api/teams')
  const data = await response.json()
 
  const teams = data.slice(0,num);
  const players = []
  for(let i =0; i < teams.length; i++) {
    const responseID = await fetch(`https://api.opendota.com/api/teams/${teams[i]['team_id']}/players`)
    const dataID = await responseID.json()

    const obj = {
      name: teams[i]['name'],
      players: dataID.map(player => player.name)
    }
    players.push(obj)
  }

  
  dispatch(fetchTeamPlayers(players))
  dispatch(receiveAPI())
  }
  catch (error) {
    console.log(error)
  }

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





