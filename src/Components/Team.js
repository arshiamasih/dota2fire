import React from 'react'
import { connect } from 'react-redux'
import { getWinner } from '../store/actions'

class Team extends React.Component {
  constructor(props) {
    super(props)

    //assining props to state might anti-pattern
    this.state = {
      name: '',
      teams: this.props.teams,
      positions: {
        round: null,
        match: null,
        team: null
      }
    }
    this.selectWinner = this.selectWinner.bind(this)
  }


  selectWinner=(event)=>{
    //event.preventDefault()
    const {id, name} = event.target
    const position = {
      round: this.props.roundPosition,
      match: this.props.matchPosition,
      team: id
    }
    this.setState({
      name: this.props.teamName,
      positions: position
    }, console.log('select winner', this.state))
    
    this.props.getWinner(this.state.name, this.state.positions)
    console.log('1', this.state.name, this.state.positions)
   
  }

  //click updates state with team info
  //object is sent back to redux
  //calculates winner and position to traverse
  render() {
  
    return (
      <div className={'team'}>
      <p >Team {this.props.teamName}</p>
      <button 
      id={this.props.id}
      matchPosition={this.props.matchPosition}
      roundPostion={this.props.roundPosition}
      className={'select-winner'}
      name={this.props.teamName}
      onClick={(event)=>this.selectWinner(event)}>
      Winner
      </button>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  getWinner: (t, p)=>dispatch(getWinner(t , p))
})

export default connect(null, mapDispatch)(Team)