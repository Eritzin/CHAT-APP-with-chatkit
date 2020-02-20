import React from "react";
import Message from "../Messages/Message";

class Messages extends React.Component {
  

  render(){
  const messages = this.props.messages;
  const displayMessages = messages.map(message => (
    <Message key={message.id} content={message} />
  ));

  return displayMessages;
  }
};

export default Messages;