import React, { Component } from 'react';
//import Series from '../Series/index';
//import Loader from '../../components/Loader'
import Loader from '../../Loader/index';


class SingleSeries extends Component {
    state = {
        show: null
    }

        componentDidMount(){
            const { id } = this.props.match.params;
            fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            // fetch('https://dairyapp.herokuapp.com/api/v2/all_entries')
              .then(response => response.json())
              .then(json => this.setState({ show: json }));
        }
    render(){
        const { show } = this.state;
        return(

            <div>
                {
                    show === null && <Loader/>
                }
                {
                    show !== null && 
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premierd}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="show" src={show.image.medium}/>
                        </p>
                    
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;