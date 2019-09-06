import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");
export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    <div>Time's up, bro</div>
                    <button onClick={this.props.anotherOne}>
                        Another One !
                    </button>
                    <button onClick={this.props.closeModal}>I'm out.</button>
                </Modal>
            </div>
        );
    }
}

// ReactDOM.render(<App />, ppElement);
