import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
      <Link className="header-link" to="">  Movies </Link>
      <nav className="navbar">
        <Link className="navbar__link" to="/catalog">Catalog</Link>
        <Link className="navbar__link" to="/search">Search</Link>
      </nav>
      </div>
     
    </div>
  );
}
export default Header;