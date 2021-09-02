import React from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import FactList from './components/FactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
        <Route exact path="/facts">
          <FactList />
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
