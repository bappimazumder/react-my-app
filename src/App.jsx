import { useState,useEffect } from 'react'
import './App.css'
import Clock from './Clock'

function App() {

  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //       setTime(new Date().toLocaleTimeString());
  //   },1000);

  //   return () => clearInterval(interval);

  // },[]);  

  // function Clock({locale}){
  //   return (
  //   <h1 className='heading' tabIndex={index}>
  //           <span className='text'> Current time {new Date().toLocaleTimeString(locale)}</span>
  //           <img src=''/>
  //         </h1>
  //   );

  // }

  // return <Clock locale='bn-BD' />;

  return <Clock locale="bn-BD" />;
}

export default Clock;
