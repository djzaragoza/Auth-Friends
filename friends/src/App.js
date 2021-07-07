import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </Router>
    </div>
  );
}





export default App;
