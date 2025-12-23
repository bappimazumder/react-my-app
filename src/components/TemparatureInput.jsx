import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'


}

export default class TemparatureInput extends React.Component {

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
                <fieldset>
                    <legend>Enter temparature in Celsius:</legend>
                    <input type="text" name="temparature" value={temperature} onChange={this.onTemperatureChange} />
                </fieldset>              
                
        );
    }

}