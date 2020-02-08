import React from 'react'
import loading from '../loading.png'


const Loading =(props) => {
  return (
    <div className={'loading-spinner'}>
    <h3 style={{color: 'gray'}}>Loading...</h3>
    <img src={loading} width={'100px'} height={'100px'}></img>
    </div>
  )
}

export default Loading