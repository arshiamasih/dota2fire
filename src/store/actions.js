import {ADD_WINNERS, GET_TEAMS} from './types'
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



export const fetchTeamData = (teams) => ({
  type: GET_TEAMS,
  payload: teams
})

export const getTeams = (num) => async (dispatch) => {
  //API ALREADY RANKS BY ELO SCORE
  console.log('HOW MANY TIMES HAVE I BEEN CALLED')
  const response = await fetch('https://api.opendota.com/api/teams')
  const data = await response.json()
  const teams = data.slice(0,num);
  return dispatch(fetchTeamData(teams))
}

export const getWinner = (round, match, winner) => async (dispatch) => {
  console.log('action wtfff', round, match, winner)
  return dispatch(addWinners(round, match, winner))
}



