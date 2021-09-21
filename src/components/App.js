import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Home from './Home';
import FactList from './FactList';
import FactForm from './FactForm'
import Header from './Header';

function App() {
const [facts,setFacts] = useState([]) 


useEffect(() => {
  fetch('http://localhost:3000/facts')
  .then(res=> res.json())
  .then(factData => setFacts(factData))
},[])

function newFact(newFact){
  setFacts([...facts, newFact])
}
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
        <Route exact path="/facts">
          <FactList facts = {facts} setFacts={setFacts}/>
        </Route>
        <Route exact path="/newFact">
          <FactForm newFact = {newFact}/>
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
