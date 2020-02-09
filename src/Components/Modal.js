import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../store/actions'


const Modal = (props) => {

  const closeModal=()=>{
    props.closeModal()
  }
  return (
    <div className={'overlay'}>
      <div className={'modal'}>
        {/* props.players */}
        <div className={'players'}>
        {props.players.map((player, i )=> <p> {player}</p>)}
        </div>
        <button onClick={closeModal}className={'close-btn'}> Return to Game</button>
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