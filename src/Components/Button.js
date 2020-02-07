import React from 'react'
import Button from '@material-ui/core/Button'

class GameButton extends React.Component {


  render(){
    const {onClick, id, name, className, label} = this.props
   return( 
   <Button 
    onClick={onClick}
    id={id}
    name={name}
    className={className}
    label={label}/>
   )
  }
}

export default GameButton