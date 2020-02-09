import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../reducer/actions'


const Modal = (props) => {
  return (
    <div className={'overlay'}>
      <div className={'modal'}>
        <div className={'players'}>
        {props.players.map(player=> <p> {player}</p>)}
        </div>
        <button onClick={()=>{props.closeModal()}}className={'close-btn'}> Return to Game</button>
      </div>
    </div>
  )
}

const mapState = (state) => ({
  players: state.teams.players
})

const mapDispatch = (dispatch) => ({
  closeModal: (n)=>dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(Modal)