import React from "react";
import {IoMdSend} from "react-icons/io";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: ""
    };
  }
  onChange = e => {
    const inputMessage = e.target.value;
    this.setState({
      inputMessage
    });
  };

  onclick = () => {
    this.props.currentUser.sendSimpleMessage({
      text: this.state.inputMessage,
      roomId: this.props.currentRoomId
    });

    this.setState({
      inputMessage: ""
    });
  };

  render() {
    return (
      <div>
        <input
          className="input"
          placeholder="Type your text here..."
          onChange={this.onChange}
          value={this.state.inputMessage}
          type="text"
        />
        <button onClick={this.onclick}><IoMdSend/></button>
      </div>
    );
  }
}

export default Input;
