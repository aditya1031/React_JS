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

export default function App() {
  const jokesElement = jokesData.map((joke) => {
    return (<Jokes
      setup={joke.setup}
      punchline={joke.punchline}
    />)
  });
  return (
    <>
      {jokesElement}
    </>
  )

}