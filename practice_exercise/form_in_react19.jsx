
function App() {
  function singUp(formData) {
    const email = formData.get("email");
    const password=formData.get("password")
    //Gather the info from the form 
    //Submit it to a backend
   console.log(email)
   console.log(password)
  }
  return (
    <>
      <h1>Signup Form</h1>
      <form action={singUp}>
        <label htmlFor="email">Email :-
          <input type="email" id="email" name="email" placeholder="abc@gmail.com" />
        </label>
        <br />
        <label htmlFor="password">Password :-
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}
