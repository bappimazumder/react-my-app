
// import React from "react";

// class ClickCounter extends React.Component{
  
//     render(){
//         const { count } = this.state;
//         return (
//             <div>
//                 <button type="button" onClick={this.incrementCount} >
//                     Clicked {count} times
//                 </button>
//             </div>
//         )
//     }
// }

import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count,incrementCount} = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );

}

export default withCounter(ClickCounter);