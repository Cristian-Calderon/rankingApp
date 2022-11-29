import React from "react";
import "./starpuntation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

export const StarPuntation = () => {
  return (
    <div className="star-container">
      <div className="star">
      <FontAwesomeIcon className="star-on" icon={faStar} />
      <FontAwesomeIcon className="star-on" icon={faStar} />
      <FontAwesomeIcon className="star-on" icon={faStar} />
      <FontAwesomeIcon className="star-on" icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};
