import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount(){
    fetch('https://dairyapp.herokuapp.com/api/v2/all_entries')
      .then(response => response.json())
      .then(json => this.setState({series: json}));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
            <h1>Welcome to my Tv series</h1>

        </header>
        <Intro message="Here You can find all of your most loved series" />
          The Length of series array - {this.state.series.length}

      </div>
    );
  }
}
export default App;
