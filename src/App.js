import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path={['/', '/home']} component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
