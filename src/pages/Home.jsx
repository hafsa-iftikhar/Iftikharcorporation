import "./Home.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
  const row = document.querySelector(".image-row");
  setTimeout(() => {
    row.classList.remove("collapsed");
  }, 100);
}, []);

//*************SECTION: 02 ********************/
useEffect(() => {
  const sections = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => {
    sections.forEach((sec) => observer.unobserve(sec));
  };
}, []);

  return (
    <>
    <Helmet>
  {/* BASIC SEO */}
  <title>Iftikhar Corporation - Garment Manufacturing in Pakistan</title>
  <meta
    name="description"
    content="High-quality garment manufacturing and textile production in Pakistan with modern techniques and expert craftsmanship."
  />
  <meta
    name="keywords"
    content="garment manufacturing Pakistan, textile production, clothing factory Pakistan, apparel manufacturing"
  />
  <meta name="author" content="Iftikhar Corporation" />

  {/* ROBOTS */}
  <meta name="robots" content="index, follow" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Iftikhar Corporation - Garment Manufacturing" />
  <meta
    property="og:description"
    content="High-quality garment manufacturing and textile production in Pakistan."
  />
  <meta property="og:image" content="https://yourwebsite.com/images/hero.webp" />
  <meta property="og:url" content="https://yourwebsite.com" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Iftikhar Corporation" />
  <meta
    name="twitter:description"
    content="Garment manufacturing and textile production in Pakistan."
  />
  <meta name="twitter:image" content="https://yourwebsite.com/images/hero.webp" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://yourwebsite.com" />
</Helmet>

{/****************** SECTION: 01 *********************/}
    <main className="home">
      <section className="hero fade-up">
        <div className="hero-content">
          <p className="top-text">Garment manufacturing & textile production</p>

          <h1>Garment Manufacturing in Pakistan</h1>

          <p className="tagline">UNLEASH YOUR STYLE</p>
          <p className="website">www.iftikharcorporation.com</p>
        </div>

  <div className="image-row collapsed">
  <div className="card"><img src="/images/blue1.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/printedhoodie2.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/cut & sew2.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/Fullsleevedrop1.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/bheigsweater4.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/printedhoodie3.webp" alt="Premium garment textile product sample" /></div>
  <div className="card"><img src="/images/blacksweater2.webp" alt="Premium garment textile product sample" /></div>
</div>
      </section>
    </main>
    {/* ========================= WELCOME SECTION ========================= */}
      <section className="welcome fade-up">
        <div className="welcome-content">
          <h2>Welcome to Iftikhar Corporation</h2>
          <p>
  At Iftikhar Corporation, we are dedicated to delivering premium textile solutions 
  with unmatched expertise and precision. From intricate knitting and expert stitching 
  to processing, drying, and finishing a wide variety of fabrics, we ensure every piece 
  meets the highest standards of quality. Our team works across diverse materials, 
  unique prints, and innovative designs, combining traditional craftsmanship with modern 
  techniques to create exceptional products that stand out in the market. We pride 
  ourselves on professionalism, consistency, and a commitment to exceeding client 
  expectations in every project we undertake.
</p>
        </div>
      </section>
    {/* ========================= SERVICES SECTION ========================= */}
<section className="services fade-up">
  <div className="services-container">
    <h2>Manufacturing Services</h2>

    <div className="services-grid">

      <div className="service-card">
        <div className="card-bg bg1"></div>
        <div className="overlay"></div>
        <h3>Knitting</h3>
      </div>

      <div className="service-card">
        <div className="card-bg bg4"></div>
        <div className="overlay"></div>
        <h3>Dyeing</h3>
      </div>

      <div className="service-card">
        <div className="card-bg bg3"></div>
        <div className="overlay"></div>
        <h3>Fabric Processing</h3>
      </div>

      <div className="service-card">
        <div className="card-bg bg2"></div>
        <div className="overlay"></div>
        <h3>Stitching</h3>
      </div>

    </div>
  </div>
</section>
    {/* ========================= QUOTE SECTION ========================= */}
<section className="quote-section fade-up">
  <div className="quote-content">
    <h2 className="quote-title">Textile. Grace</h2>
    <p className="quote-text typewriter-delay">
      Elegance in every thread, woven with passion and precision.
    </p>
  </div>
</section>
     {/* ========================= PROCESS SECTION ========================= */}
<section className="process-section fade-up">
  <div className="process-container">
        
    {/* LEFT IMAGE */}
    <div className="process-image">
      <img src="images/whiteLongSleeve Polo1.webp" alt="Textile Process" />
    </div>

    {/* RIGHT SIDE */}
    <div className="process-right">

      {/* HEADING ON TOP RIGHT */}
      <div className="process-header">
        <h2>Manufacturing Process</h2>
        <p>From Yarn To Final Stitch</p>
      </div>

      {/* BOXES */}
      <div className="process-boxes">
        <div className="box">Yarn Selection</div>
        <div className="box">Knitting</div>
        <div className="box">Dyeing</div>
        <div className="box">Expert Stitching</div>
        <div className="box">Final Finishing</div>
        <div className="box">Quality Assurance</div>
      </div>
    </div>
  </div>
</section>    
{/* ========================= ADDED SECTION ========================= */}
    <section className="about-marquee">
  <div className="marquee">
    <div className="marquee-track">
      <span>
        Precision • Quality • Craftsmanship • Excellence • Manufacturing •
      </span>
      <span>
        Precision • Quality • Craftsmanship • Excellence • Manufacturing •
      </span>
      <span>
        Precision • Quality • Craftsmanship • Excellence • Manufacturing •
      </span>
      <span>
        Precision • Quality • Craftsmanship • Excellence • Manufacturing •
      </span>
    </div>
  </div>
</section>
 {/* ========================= CATEGORY SECTION ========================= */}
<section className="category-section fade-up">
  <div className="category-container">

    <div className="category-card light">
      <h2>CRAFT</h2>
      <span>Built With Precision</span>
    </div>

    <div className="category-card dark">
      <h2>CORE</h2>
      <span>Signature Collections</span>
    </div>

    <div className="category-card light">
      <h2>SCALE</h2>
      <span>Bulk & Private Label Supply</span>
    </div>

  </div>
</section>
    </>
  );
}
