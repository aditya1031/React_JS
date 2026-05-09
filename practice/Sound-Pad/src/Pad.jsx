import React from "react"

export default function Pad(props) {
     const [padState, setPadState] = React.useState(props.on);
     
     function toggleState() {
        return props.toggle(props.id)
     }


     return (
          <button
               style={{ backgroundColor: props.color }}
               className={props.on ? "on" : ""}
               // onClick={() => props.toggle(id)}
               onClick={toggleState}
          ></button>
     )
}