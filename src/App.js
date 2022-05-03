import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

import MovieListPage from './pages/movie-list-page/movie-list-page.component';
import MovieDetailsPage from './pages/movie-details-page/movie-details-page.component';


export default function App() {

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path={'/movies/:id'} element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  )
}