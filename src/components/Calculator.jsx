import React from 'react';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends React.Component {

    state = {
        temperature: 'kk',
    };

    onTemperatureChange = (e) =>{
        console.log(e.target.value);
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const { temperature } = this.state;

        return(
            <div>
                <fieldset>
                    <legend>Enter temparature in Celsius:</legend>
                    <input type="text" name="temparature" value={temperature} onChange={this.onTemperatureChange} />
                </fieldset>
                
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }

}