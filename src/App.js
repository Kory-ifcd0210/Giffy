import React from 'react';
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";             

import {Route, Link} from 'wouter';
import Home from './Views/Home';
import SearchResults from './Views/SearchResults';
import Header from './components/Header/Header';
import Login from './Views/Login';

import {UserContextProvider} from './context/UserContext'


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header/>
        <section className="App-content">
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/search/:keyword" component={SearchResults} />
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
