import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="rs-menu">
      <ul className="nav-menu">
        {/* Home */}
        <li className="menu-item-has-children">
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        {/* End Home */}
        {/*About Menu Start*/}
        <li className="menu-item-has-children">
          <Link to="/courses">Courses</Link>
        </li>
        {/*About Menu End*/}
        {/* Drop Down */}
        <li className="current-menu-item current_page_item">
          <Link to="/teachers">Teachers</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        {/*Contact Menu End*/}
      </ul>
    </nav>
  );
}

export default Nav;
