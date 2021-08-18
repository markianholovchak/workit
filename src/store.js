import { createStore } from "redux";
import rootReducer from "./reducer";
import Offers from "./data.json";

const preloadedState = {
  offers: Offers,
  filteredOffers: [],
};

const store = createStore(rootReducer, preloadedState);

export default store;
