import { useState } from "react";

export default function Jokes(props) {

     const [isShown, setIsShown] = useState(false);

     function toggleEl() {
          setIsShown(preShown => !preShown)

     }
     return (
          <div className="joke-box">
               {props.setup && <h3>Setup: {props.setup}</h3>}

               {isShown && <p> Punchline: {props.punchline}</p>}
               <p>👍: {props.upVotes}</p>
               <p>👎: {props.downVotes}</p>

               <span>Is Pun: {props.isPun ? "Yes" : "No"}</span>

               <div>
                    <p><strong>{props.comments[0].title}</strong></p>
                    <p>{props.comments[0].text}</p>
                    <p>— {props.comments[0].author}</p>
               </div> 

               <div>
                    <p><strong>{props.comments[1].title}</strong></p>
                    <p>{props.comments[1].text}</p>
                    <p>— {props.comments[1].author}</p>
               </div>

               <button onClick={toggleEl}>{isShown ? "hide punchline" : "show punchline"}</button>
               <hr />
          </div >

     )
}