import React, { Component } from 'react';
//import SeriesList from  '../../components/SeriesList';
import SeriesList from '../../SeriesList';

class Series extends Component {

    state = {
        series: []
      }
    
    //   componentDidMount(){

    //   }

      onSeriesInputChange = e => {
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        // fetch('https://dairyapp.herokuapp.com/api/v2/all_entries')
          .then(response => response.json())
          .then(json => this.setState({series: json}));
      }

      render(){
          return (
            <div>
                The Length of series array - {this.state.series.length}
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} /> 
                </div>
                <SeriesList list = {this.state.series} />
            </div>
          )
      }
    }

export default Series;