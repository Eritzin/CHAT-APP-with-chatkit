import React from "react";


const Room =(props)=>{
        const active = props.roomId === props.id  ? "active":"";
return(
        <div id={props.id} role="button" className={active} >{props.name}</div>
)
}

export default Room;