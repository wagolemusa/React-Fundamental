import React, { Component } from 'react';
import './App.css';
//import Series from '../../containers/Series';
import Main from '../../Main';
import 'whatwg-fetch';




class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
            <h1>Welcome to my Tv series</h1>

        </header>
          
        <Main/>
      
      </div>
    );
  }
}
export default App;
