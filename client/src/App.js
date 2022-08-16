import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Style.css';

const App = () => {
  return (
    <div className = "appWrapper">
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Join/></Route>
        <Route path = "/chat"><Chat/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;