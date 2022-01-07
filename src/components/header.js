// Navbar jsx
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">WebParrots</a>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Featured
              </a>
            </li>

            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="saved-search">
          <AiOutlineSearch className="search-icon" />
          <input type="search" name="" id="" placeholder="Saved Search" />
        </div>
        <div className="notification-icon">
          <AiOutlineBell className="bell" />
        </div>
        <div className="user-login">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
