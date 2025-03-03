import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Publications from './pages/Publications';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/publications" component={Publications} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
