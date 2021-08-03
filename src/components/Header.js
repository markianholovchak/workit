import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo--main">
          Work<span>It</span>
        </div>
        <div className="header__logo--sub">Best job search platform</div>
      </div>
      <div className="searchbar">
        <div className="searchbar__container">
          <input
            placeholder="Front-end, Web development..."
            type="text"
            className="searchbar__input"
          />
        </div>
        <button className="searchbar__btn">Look up!</button>
      </div>
    </div>
  );
}

export default Header;
