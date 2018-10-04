import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount(){
    const series = ["Vikings", "Game of Thrones", "Empare"];

    setTimeout(() =>{
      this.setState({ series});
    },2000);
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
