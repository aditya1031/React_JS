

function App() {

  const [myFavoriteThings, setFavoriteThings] = React.useState([]);

const favThings = [
  "dahi 🥣",
  "milk 🥛",
  "butter 🧈",
  "chach 🥤",
  "mistidhoi 🍮",
  "paneer 🧀",
  "ghee 🫙",
  "lassi 🥛",
  "cheese 🧀",
  "ice cream 🍨",
  "rabri 🍮",
  "kheer 🍚",
  "kulfi 🍦",
  "shrikhand 🥣",
  "buttermilk 🥤"
]

  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>);

  function addFavoriteThings() {
    setFavoriteThings(prevFavThings => [...prevFavThings, favThings[prevFavThings.length]])
  }

  return (
    <>
      <button onClick={addFavoriteThings}>Add item</button>
      <section> 
        {thingsElements}
      </section>
    </>
  )
}
