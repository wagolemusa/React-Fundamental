import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';




class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
            <h1>Welcome to my Tv series</h1>

        </header>
        <Intro message="Here You can find all of your most loved series" />
          
        <Series/>
      
      </div>
    );
  }
}
export default App;
