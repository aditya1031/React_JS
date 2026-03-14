import marker from "../assets/marker.svg"


export default function Entry(props) {
   
     return (
          <article className="entry-container">
               <div className="entry-img-box">
                    <img src={props.entry.img.src} alt="destination-img" className="entry-img" />
               </div>
               <div className="content-box">
                    <div className="top-content">
                         <div className="top-content-right-box">
                              <img src={marker} alt="marker-img" className="marker-img" />
                              <span>{props.entry.country}</span>
                         </div>

                         <a href={props.entry.mapLink}>
                              <span className="link-to-google">View on Google Maps</span>
                         </a>
                    </div>
                    <div className="title-content">
                         <span>{props.entry.title}</span>

                    </div>
                    <div className="detail-content">
                         <span className="date">
                              {props.entry.dates}
                         </span>
                         <p>
                              {props.entry.text}
                         </p>
                    </div>
               </div>
          </article>
     )
}