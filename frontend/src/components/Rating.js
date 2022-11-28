import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>{rating >= 1 ? <AiOutlineStar /> : <AiFillStar />}</span>
      {/* <span>
        <
        
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span> */}
      <span> {numReviews} reviews</span>
    </div>
  );
}

export default Rating;
