import React from 'react';
import './App.css';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom'
import WatchMovie from './components/WatchMovie'
import Home from './components/Home';
import Search from './components/Search';
import Header from './components/Header';
import Movie from './components/Movie';
import TvShow from './components/TvShow';
import TvShowSeasons from './components/TvShowSeasons';
import TvShowEpisode from './components/TvShowEpisode';

function App() {

  

  return (
    <div>
      <Router>
        <Header  />
        <Routes>
          <Route exact path="/en" element={<Home  />} />
          <Route exact path="/en/movie/:id/:name" element={<Movie  />} />
          <Route exact path="/en/movie/:id/:name/watch" element={<WatchMovie  />} />
          <Route exact path="/en/tv/:id/:name" element={<TvShow  />} />
          <Route exact path="/en/tv/:id/:name/:season" element={<TvShowSeasons  />} />
          <Route exact path="/en/tv/:id/:name/:season/:episode" element={<TvShowEpisode  />} />
          <Route exact path="/en/search" element={<Search  />} />
          <Route exact path="/" element={<Navigate replace to="/en" />} />
        </Routes>      
      </Router>
    </div>
  );
}

export default App;

// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",