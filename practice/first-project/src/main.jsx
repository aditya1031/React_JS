import { createRoot } from "react-dom/client"
import "./index.css"
const root = createRoot(document.getElementById("root"));

root.render(

  <main>
    <img src="/src/assets/React.svg" alt="image_here" />
    <h2>Fun facts about React</h2>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by meta</li>
      <li>Powers thousands of enterprise app,including mobile apps</li>
    </ul>
  </main>

)