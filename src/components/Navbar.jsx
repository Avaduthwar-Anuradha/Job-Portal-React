import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Job Portal</h2>

      {/* ☰ Mobile icon */}
      <div
        className="menu-icon"
        onClick={() => setOpen(prev => !prev)}
      >
        ☰
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>Jobs</Link>
        </li>
        <li>
          <Link to="/applied" onClick={() => setOpen(false)}>Applied Jobs</Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setOpen(false)}>Favorites ❤️</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;