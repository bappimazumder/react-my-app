import React from 'react';

class Clock extends React.Component {
    //constructor(props){
    //  super(props);
      state = {date : new Date()};
   // }

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

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Current time {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
        <img src="" alt="" />
      </h1>
    );
  }
}



export default Clock;