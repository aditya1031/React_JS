function App() {
  const [count, setCount] = React.useState(0);

  // function decrement() {
  //   setCount(count - 1);
  // }

  // function increment() {
  //   setCount(count + 1);
  // }

  function increment() {
    setCount(prevCount => prevCount + 1) 

  }
  function decrement() {
    setCount(prevCount => prevCount - 1)

  }

  return (
    <main>

      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </main>
  )
}

function App() {
  const [isGoingOut, setDecision] = React.useState(true)

  // function decisionNO() {
  //   setDecision(isGoingOut => isGoingOut = false);
  // }

  // function decisionYES() {
  //   setDecision(isGoingOut => isGoingOut = true);

  // }

  function decision() {
    setDecision(isGoingOut => !isGoingOut);
  }

  return (
    <>
      <h1>Do i feel like going out tonight</h1>

      <h2>{isGoingOut ? "Yes" : "No"}</h2>
      <button onClick={decision}>{isGoingOut ? "No" : "Yes"}</button>
    </>
  )
}
