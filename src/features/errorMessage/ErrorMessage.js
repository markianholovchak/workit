import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
  return (
    <div className="error">
      Oups... some error occured
      <Link to="/" className="error__link">
        Go home
      </Link>
    </div>
  );
}

export default ErrorMessage;
