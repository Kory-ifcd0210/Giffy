import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';

import {Route, Link} from 'wouter';




function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to='/gif/Rick'>Gifs de Rick</Link>
        <Link to='/gif/gatos'>Gifs de gatos</Link>
        <Link to='/gif/random'>Gifs de random</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
