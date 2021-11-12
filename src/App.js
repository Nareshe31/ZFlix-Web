import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import WatchMovie from './components/WatchMovie'
import Home from './components/Home';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header  />
        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route exact path="/watch/movie/:id/:name" element={<WatchMovie  />} />
          <Route exact path="/search" element={<Search  />} />
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
