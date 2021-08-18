import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import OfferDescContent from "./OfferDescContent";
function OfferDescription() {
  const history = useHistory();
  const { id } = useParams();
  const offer = useSelector((state) => {
    return state?.filteredOffers.find((offer) => offer.id === parseInt(id));
  });

  if (!offer) {
    history.push("/error/");
  }
  let props = {};
  if (offer) {
    props = {
      roleName: offer.roleName,
      type: offer.type,
      company: offer.company,
      location: offer.location,
      postedTime: offer.postedTime,
      intro: offer.requirements.intro,
      content: offer.requirements.content,
      items: offer.requirements.items,
    };
  }

  return (
    <div className="offerDescription">
      {offer && <OfferDescContent data={props} />}
    </div>
  );
}

export default OfferDescription;
