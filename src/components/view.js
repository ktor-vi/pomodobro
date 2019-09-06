import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div id="timer">
                <div id="time">{this.props.displayTime}</div>
                <div id="buttons">
                    <button type="button" onClick={this.props.startTimer}>
                        Start
                    </button>
                    <button type="button" onClick={this.props.incrementTime}>
                        +
                    </button>
                    <button type="button" onClick={this.props.decrementTime}>
                        -
                    </button>
                    <button type="button" onClick={this.props.resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}
