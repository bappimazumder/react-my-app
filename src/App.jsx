//import { useState,useEffect } from 'react'
//import './App.css'
// import Clock from './components/Clock'
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
//import Text from "./components/inheritance/Text";
//import Emoji from "./components/inheritance/Emoji";
// import Text from "./components/composition/Text"
// import Emoji from "./components/composition/Emoji";
// import Bracket from "./components/composition/Bracket" 

import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  console.log("App component rendered");
  return <div className="app">
    <ClickCounter />
    <HoverCounter />
    </div>
 
  // return (
  //   <Emoji>
  //       {/* {({addEmoji}) => <Text  addEmoji={addEmoji} />}      */}
  //       {({addEmoji}) => (
  //         <Bracket>
  //           {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
  //         </Bracket>
  //       )}
  //   </Emoji>
    
  // );
 
 // return <Emoji><Text /></Emoji>; 

  

  // return <Clock />;
  //const quantities = [1,2,3];
  // return (
  //     <div>
  //       {/* <ClockList quantities={quantities} /> */}
  //       {/* <Form /> */}
      
  //     </div>
  // );

    // return (
    //   <div>
    //     <Calculator />
    //   </div>
    //   );
}

export default App;
