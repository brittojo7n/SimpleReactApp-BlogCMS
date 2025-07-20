import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-brand">Blog CMS Lite</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Create Post</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;