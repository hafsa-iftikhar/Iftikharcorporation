import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [stitchedOpen, setStitchedOpen] = useState(false);
  const [fabricOpen, setFabricOpen] = useState(false);

  //*********BLUR EFFECT *****************/
  useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector(".site-header");

    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrapper">

          {/* HAMBURGER */}
<div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
</div>

          {/* DESKTOP MENU */}
          <ul className="nav-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <li className="dropdown">
              <span> Category ▾</span>

              <ul className="dropdown-menu">
                <li className="sub-dropdown">
                  <Link to="/stitched" className="dropdown-link">
                    Stitched ▸ </Link>
                  <ul className="sub-menu">
                    <li><Link to="/polo">Tees & Polo</Link></li>
                    <li><Link to="/tshirts">Shirts</Link></li>
                    <li><Link to="/hoodies">Hoodies & sweatshirts</Link></li>
                    <li><Link to="/pants">Bottoms</Link></li>
                  </ul>
                </li>

                <li className="sub-dropdown">
                  <Link to="/fabric" className="dropdown-link">
                   Greige and dyed fabric ▸ </Link>
                  <ul className="sub-menu">
                    <li><Link to="/fabric/knitted">Knitted</Link></li>
                    <li><Link to="/fabric/woven">Woven</Link></li>
                    <li><Link to="/fabric/denim">Denim</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* LOGO */}
          <div className="nav-logo">
            IFTIKHAR CORPORATION
          </div>

          {/* DESKTOP RIGHT */}
          <div className="nav-right">
  {/* WhatsApp */}
  <a
  href="https://wa.me/923702490300"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-icon-link"
>
  <FaWhatsapp className="nav-icon" />
</a>

{/* Instagram */}
<a
  href="https://www.instagram.com/ic_textile?igsh=YjcxMDZlMHVodXpy"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-icon-link"
>
  <FaInstagram className="nav-icon" />
</a>
</div>

        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}

      <div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
  <div className="close-btn" onClick={() => setMenuOpen(false)}>
    <FaTimes />
  </div>
</div>
        <div className="sidebar-logo">
           IFTIKHAR CORPORATION
         </div>

        <ul className="mobile-menu">

          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

          {/* CATEGORY */}
          <li>
            <span onClick={() => setCategoryOpen(!categoryOpen)}>
              Category ▾
            </span>

            {categoryOpen && (
              <ul className="mobile-submenu">

                {/* STITCHED */}
                <li className="mobile-category-item">
  <div className="mobile-category-row">
    <Link 
      to="/stitched" 
      onClick={() => setMenuOpen(false)}
      className="mobile-category-link"
    >
      Stitched
    </Link>

    <span 
      className="mobile-arrow"
      onClick={() => setStitchedOpen(!stitchedOpen)}
    >
      ▾
    </span>
  </div>

  {stitchedOpen && (
    <ul className="mobile-submenu">
      <li><Link to="/polo" onClick={() => setMenuOpen(false)}>Tees & Polo</Link></li>
      <li><Link to="/tshirts" onClick={() => setMenuOpen(false)}>Shirts</Link></li>
      <li><Link to="/hoodies" onClick={() => setMenuOpen(false)}>Hoodies & sweatshirts</Link></li>
      <li><Link to="/pants" onClick={() => setMenuOpen(false)}>Bottoms</Link></li>
    </ul>
  )}
</li>

                {/* RAW FABRIC */}
                <li className="mobile-category-item">
  <div className="mobile-category-row">
    <Link 
      to="/fabric" 
      onClick={() => setMenuOpen(false)}
      className="mobile-category-link"
    >
      Greige and dyed fabric
    </Link>

    <span 
      className="mobile-arrow"
      onClick={() => setFabricOpen(!fabricOpen)}
    >
      ▾
    </span>
  </div>

  {fabricOpen && (
    <ul className="mobile-submenu">
      <li><Link to="/fabric/knitted" onClick={() => setMenuOpen(false)}>Knitted</Link></li>
      <li><Link to="/fabric/woven" onClick={() => setMenuOpen(false)}>Woven</Link></li>
      <li><Link to="/fabric/denim" onClick={() => setMenuOpen(false)}>Denim</Link></li>
    </ul>
  )}
</li>

              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        </ul>
        <div className="sidebar-quote">
          Iftikhar Corporation Weaving Innovation Worldwide.
        </div>

      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}
