import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Rooms extends React.Component {
  handleClick = () => {
    const { handleActiveRoom, obj } = this.props;
    handleActiveRoom(obj);
  };

  render() {
    return (
      <ListGroup.Item onClick={() => this.handleClick()}>
        {this.props.children}
      </ListGroup.Item>
    );
  }
}

export default Rooms;