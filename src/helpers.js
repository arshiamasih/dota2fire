//helpers to define game parameters

export const defineTeamNum = {
  num: 8
}


const createStructure = (num) => {
  const hash = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight'
  }
  let arr = Object.values(hash)
  arr = arr.slice(0,num/2)
  const match = {
    win: false,
    0: null,
    1: null
  }
  const obj = arr.reduce((obj, el) =>{
    obj[el] = match
    return obj
  }, {} )
  return obj
}

export const structure = createStructure(defineTeamNum.num)

  // const winner =  {
  //   one:{ 
  //     one: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     two: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     three: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //     four: {
  //       win: false,
  //       0: null,
  //       1: null
  //     },
  //   two:{ 
  //       one: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },
  //       two: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },  
  //     },
  //   three:{ 
  //       one: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },
  //       two: {
  //         win: false,
  //         0: null,
  //         1: null
  //       },  
  //     }    
  //   }
  // }