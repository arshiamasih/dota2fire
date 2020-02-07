import React from 'react';
import GameButton from './Button';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { getGameNum } from '../store/actions'
import { connect } from 'react-redux'


const GameButtonGroup = (props) => {

  const onClick = (event)=> {
    event.preventDefault()
    const obj = {
      0: 2,
      1: 4,
      2: 8,
      3: 16,
    }
    console.log('BUTTON', obj[event.target.id])
    props.getGameNum(obj[event.target.id])

  }

  return (
    <div className={'button-group'}>

        <button id={0} onClick={event => onClick(event)}>Two</button>
        <button id={1}  onClick={event => onClick(event)}>Four</button>
        <button id={2}  onClick={event => onClick(event)}>Eight</button>
        <button id={3}  onClick={event => onClick(event)}>Sixteen</button>

    </div>
  );
}



const mapDispatch = (dispatch) => ({
  getGameNum: (n)=>dispatch(getGameNum(n))
})

export default connect(null, mapDispatch)(GameButtonGroup)
