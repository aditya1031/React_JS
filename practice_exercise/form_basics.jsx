
function App() {
  function handelSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    //Gather the info from the form 
    //Submit it to a backend
    formEl.reset();
  }
  return (
    <>
      <h1>Signup Form</h1>
      <form onSubmit={handelSubmit} method="POST">
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
