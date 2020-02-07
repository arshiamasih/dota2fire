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

export const createGame = (n) => 
  ({
    type: CREATE_GAME,
    payload: {
      n,
      num: n*2,
      start: true
    }
  })

export const getGameNum = (n) => async (dispatch) =>{
  return dispatch(createGame(n))
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



