
//LOGIC BREAKDOWN
//input number creates a tree structure where 0 is always the formatted seed round from api
// winner:  {
  //    0: [], 
  //    1: 
  //    {
  //      matches: {
  //        0: {
  //        name: '',
  //        win: false
  //        },
  //      },
  //    },
  //  },
//select winner action dynamically updates the structure using prop info about a team's 'position' (index)
//lots of math based on input # 



// a style helper
// hard coded but could be made more dynamic with some calc
  export const matchPadding = {
    2:
    {
      0: '50px',
      1: '72px',
    },
    4:
    {
      0: '50px',
      1: '80px',
      2: '150px',
    },
    8:
      {
        0: '5%',
        1: '70px',
        2: '150px',
        3: '220px'
      },
    16: 
      {
        0: '5px',
        1: '58px',
        2: '165px',
        3: '330px',
        4: '400px'
      },
  }


