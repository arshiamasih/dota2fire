import {ADD_WINNERS, GET_TEAMS} from './types'

// export const addWinners = (teamData, positions) => ({
//   //round should round++ 
//   type: ADD_WINNERS,
//   payload: {
//     teamData,
//     positions
//   }
// })

export const addWinners = (round, match, winner) => {

  return {
    //round should round++ 
    type: ADD_WINNERS,
    payload: {
      winner,
    },
    round,
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

// export const getWinner = (team, position) => async (dispatch) => {
//   console.log('action', team,  position)
//   return dispatch(addWinners(team, position))
// }

export const getWinner = (round, match, winner) => async (dispatch) => {
  console.log('action wtfff', round, match, winner)
  return dispatch(addWinners(round, match, winner))
}



