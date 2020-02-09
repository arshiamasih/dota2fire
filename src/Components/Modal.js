import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../reducer/actions'


const Modal = (props) => {
  console.log('modal', props.players)
  const { names, team } = props.players
  return (
    <div className={'overlay'}>
      <div className={'modal'}>
      <h3 className={'modal-header'}>Team {team}</h3>
        <div className={'players'}>
        {names.filter(Boolean).map(player=><div> <p> <span>Player:</span> {player} </p> </div>)}
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