import globe from "../assets/globe.svg";


export default function Header() {
     return (
          <header>
               <div className="header-container">
                    <div className="img-box">
                         <img src={globe} alt="globe-img-here" className="logo-svg"/>
                    </div>
                    <div className="title-box">
                         <span>My Travel Journal</span>
                    </div>
               </div>
          </header>
     )
} 