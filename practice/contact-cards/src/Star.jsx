
import redStar from './assets/red_star.png'
import whiteStar from './assets/white_star.png'



export default function Star(props) {


  let star = props.isFilled ? redStar : whiteStar;

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "add to favorite" : "Remove from favorite"}
      className="favorite-button"
    >
      <span>
        <img src={star}
          className="star"
          alt="star" />
      </span>
    </button>
  )
}