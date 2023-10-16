import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Navbar.css'

const Navbar = () => (
    <Menu>
      <Link className="header item" to="/">
        <i className="paw icon" />
        Woof Pokedex
      </Link>
      <Menu.Item className="menu right">
        <Link className="item" href="/" to="/">
          <i className="rocket icon" />
          Home
        </Link>
        <Link className="item" href="/favorites" to="/favorites">
          <i className="heart icon" />
          Favorites
        </Link>
      </Menu.Item>
    </Menu>
);

export default Navbar;