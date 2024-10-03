import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

    // State to handle the collapse state
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
    // Toggle the collapse state
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    // Close dropdown on menu item click
    const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">EDIDIONG UKEM</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="https://i.imgur.com/c60X2VN.jpg" title="source: imgur.com"
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
     <span className="navbar-toggler-icon" />
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/education" onClick={closeNav}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/skills" onClick={closeNav}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/experience" onClick={closeNav}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/projects" onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/awards" onClick={closeNav}>
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/interests" onClick={closeNav}>
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}