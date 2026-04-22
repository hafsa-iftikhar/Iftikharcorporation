import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-left">
          <div className="footer-logo">IFTIKHAR CORPORATION</div>
          <p className="footer-quote">Precision in Every Thread.</p>
        </div>

        {/* CENTER COLUMN */}
        <div className="footer-center">
          <p>Email: ictextilelimited@gmail.com</p>
          <p>WhatsApp: +92 3702490300</p>
          <p>Mon - Fri: 10 AM - 5 PM</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-right">
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <div className="footer-icons">
            <a
  href="https://wa.me/923702490300?text=Hello%20I%20want%20to%20discuss%20garment%20manufacturing"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>

{/* Instagram */}
<a
  href="https://www.instagram.com/ic_textile?igsh=YjcxMDZlMHVodXpy"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

{/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ictextilelimited@gmail.com&su=Manufacturing Inquiry&body=Hello, I want to discuss garment manufacturing."
  target="_blank"
  rel="noopener noreferrer"
  className="nav-icon-link"
>
  <FaEnvelope />
</a>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Iftikhar Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}
