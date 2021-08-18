import Header from "./features/header/Header";
import JobOffers from "./features/offers/JobOffers";
import OfferDescription from "./features/offerDescription/OfferDescription";
import ErrorMessage from "./features/errorMessage/ErrorMessage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <JobOffers />
          </Route>
          <Route exact path="/offers/:id">
            <OfferDescription />
          </Route>
          <Route exact path="/error">
            <ErrorMessage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
