import React, { useState } from "react";
import { useDispatch } from "react-redux";
function Header() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  // If search input is empty then do nothing, otherwise - dispatch action to the store
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    dispatch({ type: "offers/searchSubmited", payload: search });
    setSearch("");
  };

  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo--main">
          Work<span>It</span>
        </div>
        <div className="header__logo--sub">Best job search platform</div>
      </div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <div className="searchbar__container">
          <svg className="searchbar__icon">
            <use xlinkHref="/img/sprite.svg#icon-search"></use>
          </svg>
          <input
            value={search}
            placeholder="Front-end, Web development..."
            type="text"
            className="searchbar__input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="searchbar__btn">
          Look up!
        </button>
      </form>
    </div>
  );
}

export default Header;
