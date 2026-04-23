import React from 'react';
import './App.css'

import Star from './Star';
import avatar from './assets/avtar.png'



function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })


  function toggleFavorite() {
    setContact(prevContent => ({
      ...prevContent,
      isFavorite: !prevContent.isFavorite
    }))
  }


  return (
    <main>
      <article className="card">
        <img src={avatar} className="avatar" alt="userImg" />
        <div className="info">
          <Star
            isFilled={contact.isFavorite}
            handleClick={toggleFavorite}
          />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}



export default App
