import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Projects from './components/projects.js';
 
class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Route exact path='/' render={props => <Projects {...props} />} />
    </div>
  );
  }
}

export default App;
