import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import List1 from './pages/List1';
import List2 from './pages/List2';
import List3 from './pages/List3';
import List4 from './pages/List4';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MasterProvider from './utils/context/index';

function App() {
  return (
    <>
      <MasterProvider>
        <NavBar />
        <Route path={['/', '/home']} component={Home} />
        <Route exact path={'/list1'} component={List1} />
        <Route exact path={'/list2'} component={List2} />
        <Route exact path={'/list3'} component={List3} />
        <Route exact path={'/list4'} component={List4} />
      </MasterProvider>
    </>
  );
}

export default App;
