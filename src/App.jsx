import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(interval);

  },[]);

  // setInterval(() => {
  //   const element = (
  //         <h1 className='heading' tabIndex={index}>
  //           <span className='text'> Hello {new Date().toLocaleTimeString()}</span>
  //           <img src=''/>
  //         </h1>
  //     );
  //       ReactDom.render(element,document.getElementById('root'));
  // },1000);
  

  return (
    <h1 className='heading' tabIndex={index}>
            <span className='text'> Current time {time}</span>
            <img src=''/>
          </h1>
  );
}

export default App
