import React from "react";

const format = time => {
    let timeStr = "";
    let zero = "0";
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds < 10
        ? (timeStr = `${minutes}:${zero}${seconds}`)
        : (timeStr = `${minutes}:${seconds}`);

    return timeStr;
};
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevTime: 1500,
            time: 1500,
            running: false,
            message: "This is a message",
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
    time() {
        let ref = setInterval(() => {
            this.state.time <= 0 || this.state.running == false
                ? clearInterval(ref)
                : this.setState(prefState => ({
                      time: prefState.time - 1,
                  }));
        }, 1000);
    }

    toggleTimer() {
        let running = this.state.running;
        console.log("yeet");
        if (running == false) {
            this.setState(() => ({
                running: true,
            }));
            this.time();
        } else if (running == true) {
            this.setState(() => ({
                message: "Please stay focused",
            }));
        }
    }
    incrementTime() {
        this.state.running == false
            ? this.setState(prefState => ({
                  time: prefState.time + 300,
                  prevTime: prefState.prevTime + 300,
              }))
            : null;
    }
    decrementTime() {
        this.state.running == false
            ? this.setState(prefState => ({
                  time: prefState.time - 300,
                  prevTime: prefState.prevTime - 300,
              }))
            : null;
    }

    resetTimer() {
        this.setState(prevState => ({
            running: false,
            time: prevState.prevTime,
        }));
    }

    render() {
        return (
            <div>
                <View
                    displayTime={format(this.state.time)}
                    startTimer={this.toggleTimer}
                    incrementTime={this.incrementTime}
                    decrementTime={this.decrementTime}
                    resetTimer={this.resetTimer}
                />
            </div>
        );
    }
}
