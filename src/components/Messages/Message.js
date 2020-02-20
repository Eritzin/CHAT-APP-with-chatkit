import React from "react";

const Message = props => {
  const { content } = props;
  const date=content.createdAt.split("")
  date.splice(10,1," ")
  date.splice(16,4," ")
 
  
  return (
    <div className="messageCard">
      <li className="list-group-item">
        <p>
          <strong>
         {content.sender.name} : {content.text} 
          </strong>
        </p>
        <div> {date}</div>
      </li>
    </div>
  );
};

export default Message;