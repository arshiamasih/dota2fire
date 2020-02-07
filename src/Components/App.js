import React from 'react';
import logoDota from '../logoDota.png';
import Bracket from './Bracket'
import '../App.css';

//component hierarchy: App > Round > Match > Team
const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoDota}  className={'logo'}height={'100%'}/>
          <div className={'header-text'}>
          <p className={'header-text'}>
           <code>DOTA 2 FIRE</code> 
          </p>
          </div>
 
        </header>
        <main className="main">
        <Bracket/>
        </main>
      </div>
    );
}
export default App;
