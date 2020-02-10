import React from 'react'

const Connector = (props) => {
  console.log('in connector' , props)
  const styles= {
    default: 'connector',
    final: 'connector-final'

  }

  let connectorStyles = styles.default
  if(props.round === props.winningRound) {
    connectorStyles = styles.final
  }
  return (
    <div className={connectorStyles}>
      <div className={'vertical-line-left'}>
      </div>
      <div className={'vertical-line-right'}>
        <div className={'inner-div-top'}>
        </div>
        <div className={'inner-div-bottom'}>
        </div>
      </div>
    </div>


  )
}

export default Connector