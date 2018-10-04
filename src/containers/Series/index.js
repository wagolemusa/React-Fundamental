import React, { Component } from 'react';

class Series extends Component {

    state = {
        series: []
      }
    
      componentDidMount(){
        fetch('https://dairyapp.herokuapp.com/api/v2/all_entries')
          .then(response => response.json())
          .then(json => this.setState({series: json}));
      }

      render(){
          return (
            <div>
                The Length of series array - {this.state.series.length}
            </div>
          )
      }
    }

export default Series;