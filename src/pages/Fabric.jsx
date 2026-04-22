import React from "react";
import "./Fabric.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

const RawFabric = () => {
  /**************SECTION : 02  ***********************/
  const rawRef = useRef(null);
const [showRaw, setShowRaw] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setShowRaw(true);
    },
    { threshold: 0.3 }
  );

  if (rawRef.current) observer.observe(rawRef.current);

  return () => observer.disconnect();
}, []);

/**********************SECTION: 03 ************************/
useEffect(() => {
  const boxes = document.querySelectorAll(".fabric-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  boxes.forEach((box) => observer.observe(box));
}, []);
  return (
    <main className="raw-page">
      <Helmet>
  <title>Fabric Manufacturing | Iftikhar Corporation</title>

  <meta
    name="description"
    content="High-quality fabric manufacturing by Iftikhar Corporation. We produce knitted, woven, and denim fabrics with precision and modern technology."
  />

  <meta
    name="keywords"
    content="fabric manufacturing Pakistan, textile production, fabric supplier Pakistan, knitted woven denim fabric"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Fabric Manufacturing - Iftikhar Corporation" />
  <meta property="og:description" content="Premium fabric production including knitted, woven, and denim." />
  <meta property="og:image" content="https://ictextile.com/images/fabric1.webp" />
  <meta property="og:url" content="https://ictextile.com/fabric" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fabric Manufacturing" />
  <meta name="twitter:description" content="High-quality textile and fabric production." />
  <meta name="twitter:image" content="https://ictextile.com/images/fabric1.webp" />

  {/* Canonical */}
  <link rel="canonical" href="https://ictextile.com/fabric" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fabric Manufacturing",
      "description": "Textile and fabric production including knitted, woven, and denim fabrics",
      "provider": {
        "@type": "Organization",
        "name": "Iftikhar Corporation"
      }
    }
    `}
  </script>
</Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="raw-hero">
        <div className="raw-hero-content">
          <h1>Greige and dyed fabric</h1>
        </div>
      </section>


      {/* ================= FABRIC INTRO SECTION ================= */}
      <section
         ref={rawRef}
        className={`raw-intro ${showRaw ? "show" : ""}`}
      >
        <div className="raw-intro-wrapper">

          {/* LEFT CONTENT */}
          <div className="raw-content">
            <h2>Luxury Unstitched Fabrics</h2>

            <p className="raw-description">
              ★ Discover our exclusive collection of premium raw fabrics,
              designed for comfort, elegance, and durability. 
              Perfect for custom tailoring and personal expression.
            </p>

            <div className="raw-points">
              <div className="raw-point">
                <span>01</span>
                <p>Breathable & high-quality material</p>
              </div>

              <div className="raw-point">
                <span>02</span>
                <p>Soft texture with refined finish</p>
              </div>

              <div className="raw-point">
                <span>03</span>
                <p>Perfect for formal & casual wear</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="raw-image">
            <img src="/images/fabricside1.webp" alt="Raw Fabric" />
          </div>

        </div>
      </section>
      {/* ================= SECTION : 03 ================= */}
      <section className="fabric-split">
  <div className="fabric-box hosiery">
    <div className="overlay"></div>

    <div className="fabric-content">
      <h2>Knitted</h2>
      <p>Premium knitted fabrics offering comfort, stretch, and breathability ideal for modern apparel and everyday wear.</p>
    </div>
  </div>

  <div className="fabric-box woven">
    <div className="overlay"></div>

    <div className="fabric-content">
      <h2>Woven</h2>
      <p>High quality woven fabrics known for durability and structure, perfect for formal wear and refined garments.</p>
    </div>
  </div>

  <div className="fabric-box denim">
    <div className="overlay"></div>

    <div className="fabric-content">
      <h2>Denim</h2>
      <p>Durable denim fabric designed for timeless style, combining strength with a modern fashion appeal.</p>
    </div>
  </div>
</section>
    </main>
  );
};

export default RawFabric;