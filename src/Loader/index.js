import React from 'react';
import loaderSrc from '../assets/loder.png';
//import Loader from './index';
const  Loader = props => (
    <div>
        <img 
        style = {{ width: 65 }}
        alt="Loader icon"

        src={loaderSrc} />
    </div>
);

export default Loader;

