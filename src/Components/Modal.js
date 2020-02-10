import React from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import { closeModal } from '../reducer/actions'


const Modal = (props) => {

  const { names, team } = props.players
  const { apiStatus } = props
  const success = 'success'
  return (
  
    <div className={'overlay'}>
      
      <div className={'modal'}>
        
      {apiStatus.players === success ?
      <div>
      <h3 className={'modal-header'}>Team {team}</h3>
        <div className={'players'}>
        {names.filter(Boolean).map(player=><div className={'player-detail'}> <p> <span>Player:</span> {player} </p> </div>)}
        </div>
        <button onClick={()=>{props.closeModal()}}className={'close-btn'}> Return to Game</button>
        </div> : <Loading />}
      </div> 
    </div>
    
  )
}

const mapState = (state) => ({
  players: state.teams.players,
  apiStatus: state.teams.apiStatus
})



const mapDispatch = (dispatch) => ({
  closeModal: (n)=>dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(Modal)