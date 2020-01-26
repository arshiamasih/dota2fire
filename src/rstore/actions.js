import {ADD_WINNERS, GET_TEAMS} from './types'


export const addWinners = () => ({
  type: ADD_WINNERS
})

export const getTeams = () => ({
  type: GET_TEAMS,
  payload: {
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
})

