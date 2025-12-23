//import { useState,useEffect } from 'react'
//import './App.css'
// import Clock from './components/Clock'
// import ClockList from './components/ClockList';
// import Form from './components/Form';
import Calculator from './components/Calculator';

function App() {
  console.log("App component rendered");

  // return <Clock />;
  //const quantities = [1,2,3];
  // return (
  //     <div>
  //       {/* <ClockList quantities={quantities} /> */}
  //       {/* <Form /> */}
      
  //     </div>
  // );

    return (
      <div>
        <Calculator />
      </div>
      );
}

export default App;
