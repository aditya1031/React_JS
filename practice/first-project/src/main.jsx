import { createRoot } from "react-dom/client"


import "./index.css"

import Header from "./Header.jsx"
import  Footer  from "./Footer.jsx";
import  Main  from "./contentMain.jsx"

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)

