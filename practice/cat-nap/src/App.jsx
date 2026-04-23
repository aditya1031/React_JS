import React from 'react'
import Contact from './Contact'

import Jokes from './jokes'

// import whiskerson from '../src/images/mr-whiskerson.png'
// import Fluffykins from '../src/images/Fluffykins.png'
// import Felix from '../src/images/Felix.png'
// import Pumpkin from '../src/images/Pumpkin.png'


// return (
//   <>
//     <div className="contacts">
//       <Contact
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//         img={whiskerson}
//       />

//       <Contact
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//         img={Fluffykins}
//       />

//       <Contact
//         name="Felix"
//         phone="(212) 555-4567"
//         email="thecat@hotmail.com"
//         img={Felix}
//       />

//       <Contact
//         name="Pumpkin"
//         phone="(0800) CAT KING"
//         email="pumpkin@scrimba.com"
//         img={Pumpkin}
//       />
//     </div>


//     <div className="jokes-container">
//       <Jokes
//         setup="Why was the cat sitting on the computer?"
//         punchline="Because it wanted to keep an eye on the mouse."
//         upVotes={3}
//         downVotes={33}
//         isPun={false}
//         comments={[
//           { author: "Alex", title: "Funny!", text: "This made me laugh 😂" },
//           { author: "Riya", title: "Nice joke", text: "Cats and computers always match." },
//         ]}
//       />

//       <Jokes
//         setup="What do cats like to eat for breakfast?"
//         punchline="Mice Krispies."
//         upVotes={100}
//         downVotes={11}
//         isPun={true}
//         comments={[
//           { author: "Sam", title: "Good pun", text: "Classic cat humor." },
//           { author: "Neha", title: "Loved it", text: "That pun is actually clever." },
//         ]}
//       />

//       <Jokes
//         setup="Why did the cat join Instagram?"
//         punchline="To become a purr-influencer."
//         upVotes={22}
//         downVotes={23}
//         isPun={true}
//         comments={[
//           { author: "David", title: "Relatable", text: "Every cat is an influencer now." },
//           { author: "Priya", title: "Cute joke", text: "Purr-influencer is funny." },
//         ]}
//       />

//       <Jokes
//         punchline="I told my cat a joke about a mouse… it didn't laugh, it just started hunting."
//         upVotes={10}
//         downVotes={2}
//         isPun={false}
//         comments={[
//           { author: "John", title: "So true", text: "Cats only care about the hunt." },
//           { author: "Aman", title: "Haha", text: "Typical cat behavior." },
//         ]}
//       />

//       <Jokes
//         punchline="My cat's favorite programming language is Python… because it loves chasing strings."
//         upVotes={23}
//         downVotes={3}
//         isPun={false}
//         comments={[
//           { author: "Rahul", title: "Programmer joke", text: "Developers will understand this." },
//           { author: "Sara", title: "Nice one", text: "Python and cats 😂 perfect combo." },
//         ]}
//       />
//     </div>

//   </>
// )

import jokesData from './jokesData'

// export default function App() {
//   const jokesElement = jokesData.map((joke) => {
//     return (<Jokes
//       key={joke.key}
//       setup={joke.setup}
//       punchline={joke.punchline}
//       upVotes={joke.upVotes}
//       downVotes={joke.downVotes}
//       isPun={joke.isPun}
//       comments={joke.comments}
//     />)
//   });
//   return (
//     <>
//       {jokesElement}
//     </>
//   )

// }


function App() {
  const [messages, setMessages] = React.useState([])

  // let head = false;

  // if (unreadMessages.length > 0) {
  //   head = true;
  // }


  // let text = `you have ${messages.length} unread messages`;
  // if (messages.length === 0) {
  //   text = "you are all caught up"
  // }
  // else if (messages.length === 1) {
  //   text = "you have 1 unread message"
  // }

  function determineText() {
    if (messages.length === 0) {
      return "you are all caught up"
    }
    else if (messages.length === 1) {
      return "you have 1 unread message"
    }
    else {
      return `you have ${messages.length} unread messages`;
    }
  }

  return (
    // <>
    //   {unreadMessages.length > 1 && <h1>you have {unreadMessages.length} unread messages! </h1>}

    //   {
    //     unreadMessages.length === 1 && <h1>You have 1 unread messages</h1>
    //   }

    //   {
    //     unreadMessages.length === 0 && <h1>You are all cought up</h1>
    //   }

    // </>

    <>
      <h1>{determineText()}</h1>
    </>
  )
}

export default App



/*

1.    what is  "conditional rendering"?
ans.  It is a way to show any element on the web page based on the predefined condition or logic  , it i s use to trigger the render for element only when the condition is true

2.    when would you use && ?
ans.  when i only need to simple hide or show a particular element on page 

3.    when would you use ternary ?
ans.  when i need to change the element value on the page in one or other way

4.    what if you need to decide between >2 options on what to display?
ans.  there are multiple ways like nested ternary,multiple && or a separate function the set the element value 

*/