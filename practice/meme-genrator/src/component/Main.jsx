import { useState } from "react";


export default function Main() {

     const [meme, setMeme] = useState({
          topText: "Monkey see !",
          bottomText: "Monkey do !",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhmIvmUi6jF3NwraYt0IukS-LRlTTjgT41iA_qvDM-g&s"
     });

     function Handle_OnChange(event) {
          const { value, name } = event.currentTarget;
          setMeme(prevMeme => ({
               ...prevMeme,
               [name]: value
          }))
     };


     return (
          <main>
               <div className="form">
                    <label>Top Text
                         <input type="text"
                              placeholder="Enter the text here."
                              name="topText"
                              onChange={Handle_OnChange}
                              value={meme.topText}
                         />
                    </label>
                    <label >Bottom Text
                         <input type="text"
                              placeholder="Enter the text here."
                              name="bottomText"
                              onChange={Handle_OnChange}
                              value={meme.bottomText}
                         />

                    </label>
                    <button>Get a new meme image📸</button>
                    <div className="meme">
                         <img src={meme.imageUrl} alt="img" />
                         <span className="top">{meme.topText}</span>
                         <span className="bottom">{meme.bottomText}</span>
                    </div>
               </div>
          </main>
     )
}