//import { useState,useCallback,useMemo } from "react";
// import MyComponent from './components/MyComponent';
// import ShowCount from './components/ShowCount';
// import Button from './components/ButtonFunc';
// import Title from './components/Title';
//import Form from "./components/FormFunc";
// import Time from "./components/Time";
// import Counter from "./components/Counterfunc";
//import ComplexCounter from "./components/ComplexCounter";
// import CounterThree from "./components/CounterThree";
// import GetPost from "./components/GetPost";
// import GetPost2 from "./components/GetPost2";

import LayoutComponent2 from "./components/LayoutComponent2";

export default function App(){

  return(
    <div className="app">     
      <div><LayoutComponent2 /></div>
    </div>
  );  

  // const[count1, setcount1] = useState(0);
  // const[count2, setCount2] = useState(0);

  // const incrementByOne = useCallback(() => {
  //   setcount1(prevCount => prevCount + 1);
  // },[]);

  // const incrementByFive = useCallback(() => {
  //   setCount2(prevCount => prevCount + 5);
  // },[]);

  // const isEvenOrOdd = useMemo(() => {
  //   let i =0;
  //   while (i < 100000000) i +=1;
  //   return count1 % 2 === 0;
  // },[count1]);
  
  // return(
  //   <div className="app">     
  //     <Title />

  //     <ShowCount count={count1} title="Counter 1"/>
  //     <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
  //     <Button handleClick={incrementByOne}>Increment by one</Button>
  //     <hr/>

  //     <ShowCount count={count2} title="Counter 2"/>
  //     <Button handleClick={incrementByFive}>Increment by five</Button>
  //   </div>
  // );  

}

