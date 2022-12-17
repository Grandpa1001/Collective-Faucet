//@ts-check
import * as React from 'react';
import './styles/App.css';


import { Login } from './components/Login';
import { Head } from './components/Head';


function App() {
  return(

    <div className="App">
      <Head />
        <h1 className="App-title1">Collective Goerli Faucet</h1>
        <Login />
    </div>
  );
}

export default App;


