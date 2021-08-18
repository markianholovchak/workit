import React from "react";
import JobOffer from "./JobOffer";
import { useSelector } from "react-redux";

function JobOffers() {
  const filteredOffers = useSelector((state) => state?.filteredOffers ?? []);
  console.log(filteredOffers);
  return (
    <section className="jobOffers">
      <div className="jobOffers__offersFound">
        Found {filteredOffers.length} jobs
      </div>
      <div className="jobOffers__offers">
        {filteredOffers.map((offer) => {
          return (
            <JobOffer
              key={offer.id}
              id={offer.id}
              roleName={offer.roleName}
              intro={offer.requirements.intro}
              company={offer.company}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobOffers;
