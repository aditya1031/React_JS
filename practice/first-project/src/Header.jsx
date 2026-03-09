
export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="left-nav-items">
          <img src="/src/assets/React.svg" alt="image_here" className="nav-logo" />
          <span className="titleName">ReactFacts</span>
        </div>

        <div className="right-nav-items">
          <ul className=" nav-list">
            <li className="nav-buttons">Pricing</li>
            <li className="nav-buttons">About</li>
            <li
              className="nav-buttons">Contact</li>
          </ul>
        </div>
      </nav>
    </header>

  )
}

