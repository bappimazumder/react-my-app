import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'


}

export default function TemparatureInput({temperature, scale , onTemperatureChange}) {    

    return(
            <fieldset>
                <legend>Enter temparature in {scaleNames[scale]}:</legend>
                <input type="text" name="temperature" value={temperature} onChange={(e) => onTemperatureChange(e,scale)} />
            </fieldset>              
            
    );
}

