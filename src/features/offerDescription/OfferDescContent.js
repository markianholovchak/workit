import React from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

function OfferDescContent({ data }) {
  return (
    <>
      <div className="offerDescription__header">
        <div className="offerDescription__offerTitle">{data.roleName} </div>
        <div className="offerDescription__offerType">{data.type}</div>
        <div className="offerDescription__offerDetails">
          <svg className="offerDescription__icon">
            <use xlinkHref="/img/sprite.svg#icon-clock"></use>
          </svg>
          {data.postedTime} by {data.company}
          <svg className="offerDescription__icon">
            <use xlinkHref="/img/sprite.svg#icon-location"></use>
          </svg>{" "}
          {data.location}
        </div>
      </div>
      <div className="offerDescription__main">
        <p className="offerDescription__offerDescription">{data.intro}</p>
        <div className="offerDescription__offerRequirements">
          {data.content}
          <ul className="offerDescription__offerRequirementsList">
            {data.items.map((item) => {
              return (
                <li key={uniqid()}>
                  <svg className="offerDescription__requirementIcon">
                    <use xlinkHref="/img/sprite.svg#icon-checkmark-outline"></use>
                  </svg>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="offerDescription__btns">
          <a
            href="#"
            className="offerDescription__btn offerDescription__btn--primary"
          >
            Apply now!
          </a>
          <Link
            to="/"
            className="offerDescription__btn offerDescription__btn--secondary"
          >
            Go home
          </Link>
        </div>
      </div>
    </>
  );
}

export default OfferDescContent;
