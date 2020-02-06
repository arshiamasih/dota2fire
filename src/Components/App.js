import React from 'react';
import logo from '../logo.svg';
import Bracket from './Bracket'
import '../App.css';

//component hierarchy: App > Round > Match > Team
const App = () => {
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
export default App;
