import { createStore } from "redux";
import rootReducer from "./reducer";
import Offers from "./data.json";

const initialState = {
  offers: Offers,
  filteredOffers: [],
  modalOfferId: "",
  modalOpened: false,
};

const store = createStore(rootReducer, initialState);

export default store;
