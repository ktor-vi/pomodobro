import React, { Component } from "react";
import View from "./view";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevTime: 300,
      time: 300,
      running: false,
      message: "This is a message"
    };
    this.time = this.time.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  time() {
    let ref = setInterval(() => {
      this.state.time <= 0
        ? clearInterval(ref)
        : this.setState(prefState => ({
            time: prefState.time - 1
          }));
    }, 1000);
  }
  toggleTimer() {
    let running = this.state.running;
    console.log("yeet");
    if (running == false) {
      this.setState(prefState => ({
        running: true
      }));
      this.time();
    } else if (running == true) {
      this.setState(prefState => ({
        message: "Please stay focused"
      }));
    }
    console.log(this.state.running);
    console.log(this.state.time);
    console.log(this.state.message);
  }
  incrementTime() {
    this.setState(prefState => ({
      time: prefState.time + 300,
      prevTime: prefState.prevTime + 300
    }));
  }
  decrementTime() {
    this.setState(prefState => ({
      time: prefState.time - 300,
      prevTime: prefState.prevTime - 300
    }));
  }
  resetTimer() {
    console.log("stahp");
    this.setState(prefState => ({
      running: false,
      time: prevTime
    }));
  }

  render() {
    return (
      <div>
        {"gneh"}
        <View
          startTimer={this.toggleTimer}
          incrementTime={this.incrementTime}
          decrementTime={this.decrementTime}
          resetTimer={this.resetTimer}
          processedTime={this.state.time}
        />
      </div>
    );
  }
}
