export default function Jokes(props) {


     return (
          <div className="joke-box">
               {props.setup && <h3>Setup: {props.setup}</h3>}

               <p>Punchline: {props.punchline}</p>
{/* 
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
               </div> */}

               <hr />
          </div>

     )
}