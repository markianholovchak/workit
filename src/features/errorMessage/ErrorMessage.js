import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
  return (
    <div className="error">
      Oups... could not find the job offer
      <Link to="/" className="error__link">
        Go home
      </Link>
    </div>
  );
}

export default ErrorMessage;
