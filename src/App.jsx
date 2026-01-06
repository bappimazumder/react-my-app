import React from 'react';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component{

  // console.log("App component rendered");
  state = {
    theme: 'dark',
  }

  switchTheme = () => {
      this.setState(({theme}) => {
        if(theme === 'dark'){
          return{
            theme: 'light',
          }

        }else {
            return {
              theme: 'dark',
            }
        }
      }
   )
  }

  render() {
    const {theme} = this.state;

    return(
      <div className="app">
      
        <Counter>
          {(count,incrementCount) => ( 
            <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
          )}
        </Counter>  

        <ThemeContext.Provider value={{theme: theme, switchTheme:this.switchTheme}} >
          <Section/>  
        </ThemeContext.Provider>        

      </div>
    );

  }  

}

