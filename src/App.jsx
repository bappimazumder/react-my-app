import React from 'react';
// import TodoClass from   './components/TodoClass';
// import Todo from './components/Todo';
import CounterIncr from './components/CounterIncr';

export default class App extends React.Component{

  render() {    

    return(
      <div className="app">     
        <CounterIncr />
      </div>
    );

  }  

}

