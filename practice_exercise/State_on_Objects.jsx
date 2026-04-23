

const UserAvatar = ({ size = 40, color = "#555" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);

const redStar = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="red">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.266L12 18.896l-7.416 4.504 1.48-8.266L0 9.306l8.332-1.151z" />
  </svg>
);

const whiteStar = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="lightgray">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.266L12 18.896l-7.416 4.504 1.48-8.266L0 9.306l8.332-1.151z" />
  </svg>
);

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact(prevContent => ({
          ...prevContent,
          isFavorite: !prevContent.isFavorite
    }))
  }

  let star = contact.isFavorite ? redStar : whiteStar;

  return (
    <main>
      <article className="card">
        <UserAvatar />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "add to favorite" : "Remove from favorite"}
            className="favorite-button"
          >
            <span>
              {star}
            </span>
          </button>
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
