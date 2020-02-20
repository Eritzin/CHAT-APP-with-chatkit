import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
const User = props => {
  const STATUS = props.status === "online" ? "online" : "offline";

  return (
    <ListGroup.Item>
      {STATUS === "online" ? (
        <IoIosRadioButtonOn className="online" />
      ) : (
        <IoIosRadioButtonOff />
      )}{" "}
      {props.name}
    </ListGroup.Item>
  );
};

export default User;