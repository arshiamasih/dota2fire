import React from 'react';
//import logo from './logo.svg';
import Bracket from './Bracket'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
  } 
  
  async componentDidMount() {
    const response = await fetch('https://api.opendota.com/api/teams')
    const data = await response.json()
    console.log(data)
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
       
          <p>
           <code>DOTA 2 FIRE</code> 
          </p>
          <Bracket/>
        </header>
      </div>
    );
  }
}

export default App;
