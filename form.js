import React from 'react';
import { type } from 'os';

class Form extends React.Component {
    render() {
        return (
               <form onSubmit={this.props.getWeather}>
                     <input type="text" name="city" placeholder="City"/>
                     <input type="text" name="country" placeholder="Country"/>
                     <button>Get Weather</button>
               </form>
            
        );
    }
};

export default Form;