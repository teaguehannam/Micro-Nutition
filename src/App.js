// Start Main App (2nd level)
import React from 'react';
import { Route } from 'react-router-dom';
// Pages
import Home from './pages/Home.js';

function App() {
  return (
    <div className="Home">

      <Route exact path="/" component={Home} />

    </div>
  );
}

export default App;
