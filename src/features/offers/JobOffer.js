import React from "react";
import { Link } from "react-router-dom";

function JobOffer({ id, logo, roleName, intro }) {
  return (
    <div className="jobOffer">
      <div className="jobOffer__img">
        <img src={logo} alt="Company logo" />
      </div>
      <h1 className="jobOffer__title">
        {roleName.length > 25 ? `${roleName.slice(0, 27)}...` : roleName}
      </h1>
      <p className="jobOffer__intro">{intro}</p>
      <Link to={`/offers/${id}`} className="jobOffer__btn">
        Learn More
        <svg className="jobOffer__icon">
          <use xlinkHref="/img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </Link>
    </div>
  );
}

export default JobOffer;
