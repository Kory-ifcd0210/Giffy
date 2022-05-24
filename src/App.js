import React from 'react';
import './App.css';

import {Route, Link} from 'wouter';
import Home from './Views/Home';
import SearchResults from './Views/SearchResults';




function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
