import Header from "./component/Header"
import Entry from "./component/Entry"

import entryData from "./component/entryData"

import "./App.css"

export default function App() {

     const Entries = entryData.map((entry) => {
          return (
               <Entry
                    key={entry.id}
                    entry={entry}
                    // img={entry.img}
                    // title={entry.title}
                    // country={entry.country}
                    // mapLink={entry.mapLink}
                    // dates={entry.dates}
                    // text={entry.text}
               />
          )
     });


     return (
          <>
               <Header />
               {Entries}
          </>
     )
}