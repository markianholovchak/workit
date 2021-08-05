import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
function Modal() {
  const id = useSelector((state) => state?.modalOfferId);
  const offer = useSelector((state) =>
    state?.filteredOffers.find((offer) => offer.id === id)
  );
  const props = {
    roleName: offer ? offer.roleName : "",
    type: offer ? offer.type : "",
    company: offer ? offer.company : "",
    location: offer ? offer.location : "",
    postedTime: offer ? offer.postedTime : "",
    intro: offer ? offer.requirements.intro : "",
    content: offer ? offer.requirements.content : "",
    items: offer ? offer.requirements.items : [],
  };
  let hidden = useSelector((state) => state?.modalOpened);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (!e.target.closest(".modal") || e.target.closest(".modal__closeIcon"))
      dispatch({ type: "modal/modalClosed" });
  };
  return (
    <div
      className={`modalContainer ${!hidden ? "modalContainer--hidden" : ""}`}
      onClick={handleClick}
    >
      <div className="modal">
        <svg className="modal__closeIcon" onClick={handleClick}>
          <use xlinkHref="./img/sprite.svg#icon-cancel-circle"></use>
        </svg>{" "}
        <div className="modal__header">
          <div className="modal__offerTitle">{props.roleName} </div>
          <div className="modal__offerType">{props.type}</div>
          <div className="modal__offerDetails">
            <svg className="modal__icon">
              <use xlinkHref="./img/sprite.svg#icon-clock"></use>
            </svg>
            {props.postedTime} by {props.company}
            <svg className="modal__icon">
              <use xlinkHref="./img/sprite.svg#icon-location"></use>
            </svg>{" "}
            {props.location}
          </div>
        </div>
        <div className="modal__main">
          <p className="modal__offerDescription">{props.intro}</p>
          <div className="modal__offerRequirements">
            {props.content}
            <ul className="modal__offerRequirementsList">
              {props.items.map((item) => {
                return (
                  <li key={uniqid()}>
                    <svg className="modal__requirementIcon">
                      <use xlinkHref="./img/sprite.svg#icon-checkmark-outline"></use>
                    </svg>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="#" className="modal__btn">
            Apply now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
