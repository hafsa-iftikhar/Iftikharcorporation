import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="contact-wrapper">
      <Helmet>
  {/* BASIC SEO */}
  <title>Contact Iftikhar Corporation - Garment Manufacturer Pakistan</title>
  <meta
    name="description"
    content="Contact Iftikhar Corporation for high-quality garment manufacturing and textile production services in Karachi, Pakistan."
  />
  <meta
    name="keywords"
    content="contact garment manufacturer Pakistan, textile company Karachi, apparel manufacturing contact, Iftikhar Corporation contact"
  />
  <meta name="author" content="Iftikhar Corporation" />

  {/* ROBOTS */}
  <meta name="robots" content="index, follow" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Contact Iftikhar Corporation" />
  <meta
    property="og:description"
    content="Get in touch with Iftikhar Corporation for premium garment and textile manufacturing in Pakistan."
  />
  <meta property="og:image" content="https://yourwebsite.com/images/contact.webp" />
  <meta property="og:url" content="https://yourwebsite.com/contact" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Iftikhar Corporation" />
  <meta
    name="twitter:description"
    content="Garment manufacturing and textile production company in Karachi, Pakistan."
  />
  <meta name="twitter:image" content="https://yourwebsite.com/images/contact.webp" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://yourwebsite.com/contact" />

  {/* STRUCTURED DATA (LOCAL BUSINESS SEO BOOST 🔥) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Iftikhar Corporation",
      "url": "https://yourwebsite.com",
      "logo": "https://yourwebsite.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923702490300",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karachi",
        "addressCountry": "PK"
      }
    }
    `}
  </script>
</Helmet>
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to connect with you</p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">

        {/* LEFT FORM */}
        <div className="contact-card">
          <h2>Get in Touch with Us</h2>

       <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      e.target.reset();
    } catch (error) {
      alert("Something went wrong!");
    }
  }}
>
  <input name="name" type="text" placeholder="Your Name" required />
  <input name="email" type="email" placeholder="Your Email" required />
  <input name="subject" type="text" placeholder="Subject" required />
  <textarea name="message" placeholder="Message" required></textarea>

  <button type="submit">Submit</button>
</form>
        </div>

        {/* RIGHT INFO */}
        <div className="contact-info-section">

  {/* GRID WRAPPER */}
 <div className="info-grid">

  <div className="info-box">
    <div className="icon-wrapper">
      <FaPhoneAlt />
    </div>
    <div>
      <h4>Phone</h4>
      <p>
      <a
        href="https://wa.me/923702490300"
        target="_blank"
        rel="noopener noreferrer"
      >
        +92 3702490300
      </a>
    </p>
    </div>
  </div>

  <div className="info-box">
    <div className="icon-wrapper">
      <FaEnvelope />
    </div>
    <div>
      <h4>Email</h4>
      <p>
        <a href="mailto:ictextilelimited@gmail.com">
          ictextilelimited@gmail.com
        </a>
      </p>
    </div>
  </div>

  <div className="info-box">
    <div className="icon-wrapper">
      <FaMapMarkerAlt />
    </div>
    <div>
      <h4>Address</h4>
      <p>
        <a
          href="https://www.google.com/maps?q=Karachi,+Pakistan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karachi, Pakistan
        </a>
      </p>
    </div>
  </div>

  <div className="info-box">
    <div className="icon-wrapper">
      <FaClock />
    </div>
    <div>
      <h4>Working Hours</h4>
      <p>Mon - Fri: 10 AM - 5 PM</p>
    </div>
  </div>
</div>

  {/* MAP FULL WIDTH */}
  <div className="map-box">
    <iframe
  title="Karachi Pakistan Location Map"
  src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
  loading="lazy"
/>
  </div>
</div>
      </section>

      {/* ================= IMAGE CTA SECTION ================= */}
      <section
      ref={sectionRef}
      className={`contact-cta ${show ? "show" : ""}`}
    >
      <div className="cta-overlay">
        <h2>“Let’s build something beautiful together.”</h2>
        <p>We’re here to bring your ideas to life.</p>
      </div>
    </section>
    </div>
  );
}