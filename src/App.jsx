import { useState,useEffect } from 'react'
import './App.css'
// import Clock from './components/Clock'
import ClockList from './components/ClockList';

function App() {
  console.log("App component rendered");

  // return <Clock />;
  const quantities = [1,2,3];
  return (
      <div>
        <ClockList quantities={quantities} />
      </div>
  );
}

export default App;
