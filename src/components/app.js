import React from "react";
import View from "./view";
import ModalComponent from "./modal";

const format = time => {
    let timeStr = "";
    const zero = "0";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (seconds < 10) {
        timeStr = `${minutes}:${zero}${seconds}`;
    } else {
        timeStr = `${minutes}:${seconds}`;
    }

    return timeStr;
};
console.log("shitt");
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevTime: 1500,
            time: 300,
            running: false,
            blockIncrement: false,
            message: "This is a message",
            modalIsOpen: false,
        };
        this.closeAndReset = this.closeAndReset.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
        this.blockIncrement = this.blockIncrement.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true,
        });
        if (this.state.modalIsOpen === true) {
            console.log("modal alive");
        }
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = "#f00";
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
        });

        console.log("modal neeeds to die");
    }
    closeAndReset() {
        this.closeModal();
        this.resetTimer();
    }

    time() {
        const ref = setInterval(() => {
            if (this.state.time <= 0 || this.state.running === false) {
                clearInterval(ref);
                this.openModal();
            } else {
                this.setState(prefState => ({
                    time: prefState.time - 1,
                }));
            }
        }, 1000);
    }
    blockIncrement() {
        if (this.state.time <= 300) {
            this.setState({
                blockIncrement: true,
            });
        } else {
            this.setState({
                blockIncrement: false,
            });
        }
    }
    toggleTimer() {
        const running = this.state.running;
        if (running === false) {
            this.setState(() => ({
                running: true,
            }));
            this.time();
        } else if (running === true) {
            this.setState(() => ({
                message: "Please stay focused",
            }));
        }
    }
    incrementTime() {
        this.blockIncrement();
        if (
            this.state.running === false &&
            this.state.blockIncrement === false
        ) {
            this.setState(prefState => ({
                time: prefState.time + 300,
                prevTime: prefState.prevTime + 300,
            }));
        }
    }
    decrementTime() {
        this.blockIncrement();
        if (
            this.state.running === false &&
            this.state.blockIncrement === false
        ) {
            this.setState(prefState => ({
                time: prefState.time - 300,
                prevTime: prefState.prevTime - 300,
            }));
        }
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
                    blockButton={this.blockIncrement}
                    displayTime={format(this.state.time)}
                    startTimer={this.toggleTimer}
                    incrementTime={this.incrementTime}
                    decrementTime={this.decrementTime}
                    resetTimer={this.resetTimer}
                />{" "}
                <ModalComponent
                    isOpen={this.state.modalIsOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    anotherOne={this.closeAndReset}
                />
            </div>
        );
    }
}
