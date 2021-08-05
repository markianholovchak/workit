import React from "react";
import { useDispatch } from "react-redux";
function JobOffer({ id, logo, roleName, intro }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "modal/modalOpened", payload: id });
  };
  return (
    <div className="jobOffer">
      <div className="jobOffer__img">
        <img src={logo} alt="Company logo" />
      </div>
      <h1 className="jobOffer__title">
        {roleName.length > 25 ? `${roleName.slice(0, 27)}...` : roleName}
      </h1>
      <p className="jobOffer__intro">{intro}</p>
      <button className="jobOffer__btn" onClick={handleClick}>
        Learn More{" "}
        <svg className="jobOffer__icon" onClick={handleClick}>
          <use xlinkHref="./img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
}

export default JobOffer;
