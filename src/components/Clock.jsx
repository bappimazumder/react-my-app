import React from 'react';
import Button from './Button';

class Clock extends React.Component {

    //constructor(props){
    //  super(props);
    //  this.state = {date : new Date()};
   // }

    state = {date : new Date()};

    componentDidMount(){
      this.clockTimer = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick() {
       this.setState({
            date: new Date(),
       });
    }

    handleClick = (locale) => {
      console.log('the button was clicked');
      this.setState({
         locale,
      });
    }

    render() {
      console.log("Clock component rendered");
      const {date,locale} = this.state;
      let button;
      if(locale === 'bn-BD'){
          button = (<Button change={this.handleClick} locale="en-US"/>);
      }else{
         button = (<Button change={this.handleClick} locale="bn-BD"/>);
      }
      return (
        <div>
          <h1 className="heading">
            <span className="text">
              Current time {this.state.date.toLocaleTimeString(locale)}
            </span>        
          </h1>
          {/* <button type="button" onClick={this.handleClick.bind(this,'en-US')}>Click Here</button> */}
           {/* <button type="button" onClick={() => this.handleClick('en-US')}>Click Here</button> */}

           {/* <Button change={this.handleClick} locale="en-US">Click Here</Button> */}
           {button}
        </div>

      );
    }
}

export default Clock;