import React, { Component } from 'react';
import './App.css';


const Intro = (props) => (
  <p className="App-intro">
    Our first Component
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
            <h1>Welcome to my Tv series</h1>

        </header>
        <Intro/>

      </div>
    );
  }
}

export default App;
