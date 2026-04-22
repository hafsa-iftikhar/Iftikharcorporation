import "./Stitched.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

/****************SECTION: 02  *************/
const collectionItems = [
  { id: 1, img: "/images/blacksweater1.webp", title: "PREMIUM LOOK" },
  { id: 2, img: "/images/blacksweater2.webp", title: "URBAN STYLE" },
  { id: 3, img: "/images/blacksweater3.webp", title: "CLASSIC FIT" },
  { id: 4, img: "/images/blacksweater4.webp", title: "LIMITED DROP" },
];

export default function Collection() {
  
/****************SECTION: 01  *************/
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

  /********************SECTION: 03 **************************/
  const brandingRef = useRef(null);
  const [showBranding, setShowBranding] = useState(false);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setShowBranding(true);
    },
    { threshold: 0.6 }
  );

  if (brandingRef.current) observer.observe(brandingRef.current);

  return () => observer.disconnect();
}, []);
  
  return (
    <>
    <section className="polo-section">
      <Helmet>
  {/* BASIC SEO */}
  <title>Stitched Garments - Iftikhar Corporation</title>
  <meta
    name="description"
    content="Explore premium stitched garments by Iftikhar Corporation with expert tailoring, modern fits, and high-quality fabric craftsmanship."
  />
  <meta
    name="keywords"
    content="stitched garments Pakistan, apparel stitching, garment stitching services, premium clothing manufacturing"
  />
  <meta name="author" content="Iftikhar Corporation" />

  {/* ROBOTS */}
  <meta name="robots" content="index, follow" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Stitched Garments Collection" />
  <meta
    property="og:description"
    content="Premium stitched garments with expert craftsmanship and modern designs."
  />
  <meta property="og:image" content="https://ictextile.com/images/stitched2.webp" />
  <meta property="og:url" content="https://ictextile.com/stitched" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Stitched Collection - Iftikhar Corporation" />
  <meta
    name="twitter:description"
    content="High-quality stitched garments designed with precision and style."
  />
  <meta name="twitter:image" content="https://ictextile.com/images/stitched2.webp" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://ictextile.com/stitched" />

  {/* STRUCTURED DATA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Stitched Garments Collection",
      "brand": {
        "@type": "Brand",
        "name": "Iftikhar Corporation"
      },
      "description": "Premium stitched garments with expert tailoring and modern designs.",
      "image": "https://ictextile.com/images/stitched2.webp"
    }
    `}
  </script>
</Helmet>

      {/* Heading */}
      <div className="polo-heading">
        <h1> Stitched </h1>
      </div>

      {/* Images */}
      <div className="polo-images">
        <img src="/images/nobg1.webp" alt="Premium stitched garment design1" />
        <img src="/images/nobg2.webp" alt="Premium stitched garment design2" />
        <img src="/images/nobg3.webp" alt="Premium stitched garment design3" />
        <img src="/images/nobg4.webp" alt="Premium stitched garment design4" />
      </div>
    </section>
    {/* ================ SECTION: 02 =========================== */}
<section
      ref={sectionRef}
      className={`stitched-service-dark ${show ? "show" : ""}`}
    >

      <div className="stitched-service-wrapper">

        <div className="service-image">
          <img src="/images/sidestitched1.webp" alt="Our Stitched Service" />
        </div>

        <div className="service-content">
          <h2>OUR STITCHED CRAFTSMANSHIP</h2>

          <p className="service-description">
            ★ Our stitched collection is built around precision tailoring...
          </p>

          <div className="service-points">

            <div className="point">
              <span>01</span>
              <p>Premium hand-selected fabrics for superior comfort.</p>
            </div>

            <div className="point">
              <span>02</span>
              <p>Expert stitching with clean structured silhouettes.</p>
            </div>

            <div className="point">
              <span>03</span>
              <p>Modern fits designed for confidence and versatility.</p>
            </div>

            <div className="point">
              <span>04</span>
              <p>Strict quality checks before every final delivery.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    {/*****************SECTION:03 **********************/}
    <section
      ref={brandingRef}
      className={`branding-section ${showBranding ? "show" : ""}`}>

      <div className="branding-overlay">

        {/* LEFT PANEL */}
        <div className="branding-left">
          <div className="hanging-tag">
            <span>IFTIKHAR-CORP</span>
          </div>

          <div className="mini-card">
            <img src="/images/stitched7.webp" alt="" />
          </div>

          <div className="mini-card">
            <img src="/images/stitched2.webp" alt="" />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="branding-right">
          <h2>
            BRANDING <span>YOU!</span>
          </h2>
          <p>A clothing that tells more about you</p>
        </div>

      </div>
    </section>
</>
    );
}