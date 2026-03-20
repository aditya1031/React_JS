import marker from "../assets/marker.svg"


export default function Entry(props) {
   
     return (
          <article className="entry-container">
               <div className="entry-img-box">
                    <img src={props.img.src} alt="destination-img" className="entry-img" />
               </div>
               <div className="content-box">
                    <div className="top-content">
                         <div className="top-content-right-box">
                              <img src={marker} alt="marker-img" className="marker-img" />
                              <span>{props.country}</span>
                         </div>

                         <a href={props.mapLink}>
                              <span className="link-to-google">View on Google Maps</span>
                         </a>
                    </div>
                    <div className="title-content">
                         <span>{props.title}</span>

                    </div>
                    <div className="detail-content">
                         <span className="date">
                              {props.dates}
                         </span>
                         <p>
                              {props.text}
                         </p>
                    </div>
               </div>
          </article>
     )
}