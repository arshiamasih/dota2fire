import React from 'react'
import loading from '../loading.png'


const Loading =(props) => {
  return (
    <div>
    <h1>Loading...</h1>
    <img src={loading} width={'100px'} height={'100px'}></img>
    </div>
  )
}

export default Loading