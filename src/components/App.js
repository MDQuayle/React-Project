import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Home from './Home';
import LogIn from './LogIn';
import FactList from './FactList';
import Navbar from './Navbar';

function App() {
const [facts,setFacts] = useState([]) 


useEffect(() => {
  fetch('http://localhost:3000/facts')
  .then(res=> res.json())
  .then(factData => setFacts(factData))
},[])

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
