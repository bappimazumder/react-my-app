import React from "react";

function HoverCounter ({count,incrementCount,theme,switchTheme}){    
    const style= theme === 'dark'? { backgroundColor: '#000000' , color: '#ffffff' }  : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Mouse over {count} times                
            </h1>
            <button type="button" onClick={switchTheme}>Change theme</button>
        </div>
    )    
}

 export default HoverCounter;

//import withCounter from './HOC/withCounter';

// const HoverCounter = (props) => {
//     const { count,incrementCount} = props;
//     return (
//         <div>
//            <h1 onMouseOver={incrementCount} >
//                      Mouse over {count} times
//                  </h1>
//         </div>
//     );

// }

//export default withCounter(HoverCounter);