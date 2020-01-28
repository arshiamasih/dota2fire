import {ADD_WINNERS, GET_TEAMS} from './types'


export const addWinners = () => ({
  type: ADD_WINNERS
})

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

//MOCK DATA STRUCTURE
  // const teams = {
  //   teams: [
  //     {id: 1,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false
  //     },
  //     {id: 2,
  //       name:'Vikings',
  //       rank: 2,
  //       isWinner: false},
  //     {id: 3,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false
  //     },
  //     {id: 4,
  //       name:'Vikings',
  //       rank: 3,
  //       isWinner: false}, 
  //     {id: 5,
  //       name: 'Warriors',
  //       rank: 6,
  //       isWinner: false},
  //     {id: 6,
  //       name:'Vikings',
  //       rank: 2,
  //       isWinner: false},
  //     {id: 7,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false},
  //     {id: 8,
  //       name:'Vikings',
  //       rank: 3,
  //       isWinner: false},
  //     {id: 9,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false
  //     },
  //     {id: 10,
  //       name:'Vikings',
  //       rank: 2,
  //       isWinner: false},
  //     {id: 11,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false
  //     },
  //     {id: 12,
  //       name:'Vikings',
  //       rank: 3,
  //       isWinner: false}, 
  //     {id: 13,
  //       name: 'Warriors',
  //       rank: 6,
  //       isWinner: false},
  //     {id: 14,
  //       name:'Vikings',
  //       rank: 14,
  //       isWinner: false},
  //     {id: 15,
  //       name: 'Warriors',
  //       rank: 1,
  //       isWinner: false},
  //     {id: 16,
  //       name:'Vikings',
  //       rank: 3,
  //       isWinner: false},                       
  //   ]
  // }
