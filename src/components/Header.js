import { NavLink } from "react-router-dom";
import "../sass/components/Header.scss";

const Header = () => {
  return (
    <header className="c-header container">
      <div className="header">
        <h1 className="header__title">Book Management App</h1>

        <div className="header__links">
          <NavLink
            to="/"
            className="header__link link"
            activeClassName="active"
            exact
          >
            Books List
          </NavLink>
          <NavLink
            to="/add"
            className="header__link link"
            activeClassName="active"
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
