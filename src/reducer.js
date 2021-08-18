import Offers from "./data.json";

const initialState = {
  offers: Offers,
  filteredOffers: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "offers/searchSubmited": {
      const filterOffers = state.offers.filter((offer) => {
        const searchText = action.payload.toLowerCase();
        if (
          offer.company.toLowerCase().includes(searchText) ||
          offer.roleName.toLowerCase().includes(searchText) ||
          offer.type.toLowerCase().includes(searchText) ||
          offer.location.toLowerCase().includes(searchText) ||
          offer.requirements.intro.toLowerCase().includes(searchText)
        ) {
          return true;
        }
      });

      return {
        ...state,
        filteredOffers: filterOffers,
      };
    }
  }
}
