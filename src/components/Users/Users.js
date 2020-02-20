import React from "react";
import User from "./User";



const Users = (props) => {
  const {activeUsers} = props;

  return (
    activeUsers &&
    activeUsers.map(user => (
     
      <User key={user.id} name={user.name} status={user.presence.state} />
      
    ))
  );
};

export default Users;