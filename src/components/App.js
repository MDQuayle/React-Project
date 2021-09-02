import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Home from './Home';
import LogIn from './LogIn';
import FactList from './FactList';
import Navbar from './Navbar';

function App() {
useEffect(() => {
  fetch('localhost:3000')
})
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
        <Route exact path="/facts">
          <FactList facts = {facts}/>
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
