import React from 'react';
// import TodoClass from   './components/TodoClass';
import Todo from './components/Todo';

export default class App extends React.Component{


  render() {    

    return(
      <div className="app">     
        <Todo />
      </div>
    );

  }  

}

