import React from 'react'
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import FactList from './components/FactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogIn />
        <Home />
        <FactList />
      </header>
    </div>
  );
}

export default App;
