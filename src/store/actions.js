import {ADD_WINNERS, GET_TEAMS} from './types'


export const addWinners = () => ({
  type: ADD_WINNERS
})

export const fetchTeamData = (teams) => ({
  type: GET_TEAMS,
  payload: teams
})

export const getTeams = () => (dispatch) => {
  console.log('test actions get teams')
  const teams = {
    teams: [
      {id: 1,
        name: 'Warriors',
        rank: 1,
        isWinner: false
      },
      {id: 2,
        name:'Vikings',
        rank: 3,
        isWinner: false},    
    ]
  }
  return dispatch(fetchTeamData(teams))
}

