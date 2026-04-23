import logo from "/src/assets/chef1.svg"

export default function Header() {
     return (
          <header>
               <img src={logo} alt="chef-icon" />
               <h1 className="header-title">Chef Cloude</h1>
          </header>
     )
}