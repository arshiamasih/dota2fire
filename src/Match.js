import React from 'react'
import Team from './Team'

class Match extends React.Component {
  render() {
    return (
      <div>
      <Team/>
      <p>versus</p>
      <Team/>
      </div>
    )
  }
}
export default Match