import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemparatureInput from './TemparatureInput';
import { convert, toCelsius , toFarhenheit } from '../lib/converter';

export default class Calculator extends React.Component {
   state = {temperature:'',scale:'c'};

   handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
   }

    render() {
        const {temperature,scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature,toCeltoCelsius) : temperature;
        const ferhenheit = scale === 'c' ? convert(temperature,toFarhenheit) : temperature;

        return(
            <div>
               <TemparatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
               <TemparatureInput scale="f" temperature={ferhenheit} onTemperatureChange={this.handleChange} />
                
               <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }

}