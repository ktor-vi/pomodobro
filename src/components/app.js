import React, { Component } from "react";
import View from "./view";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevTime: 300,
      time: 300,
      timeStr: `5:00`,
      running: false,
      message: "This is a message"
      // minutes: this.state.time / 60,
      // seconds: this.state.time % 60,
      // timeStr: `${this.state.minutes}:${this.state.seconds}`
    };
    this.timeStr = this.timeStr.bind(this);
    this.time = this.time.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  timeStr() {
    let zero = "0";
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time % 60;
    seconds < 10
      ? this.setState(prefState => ({
          timeStr: `${minutes}:${zero}${seconds}`
        }))
      : this.setState(prefState => ({
          timeStr: `${minutes}:${seconds}`
        }));
  }
  time() {
    let ref = setInterval(() => {
      this.state.time <= 0 || this.state.running == false
        ? clearInterval(ref)
        : this.setState(prefState => ({
            time: prefState.time - 1
          }));
      this.timeStr();
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
    this.timeStr();
    console.log(this.state.running);
    console.log(this.state.time);
    console.log(this.state.message);
  }
  incrementTime() {
    console.log(this.state.timeStr);
    this.setState(prefState => ({
      time: prefState.time + 300,
      prevTime: prefState.prevTime + 300
    }));
    this.timeStr();
    console.log(this.state.timeStr);
    console.log(this.state.time);
  }
  decrementTime() {
    this.timeStr();
    this.setState(prefState => ({
      time: prefState.time - 300,
      prevTime: prefState.prevTime - 300
    }));
  }
  resetTimer() {
    this.timeStr();
    console.log("stahp");
    this.setState(prevState => ({
      running: false,
      time: prevState.prevTime
    }));
  }

  render() {
    return (
      <div>
        <View
          displayTime={this.state.timeStr}
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
