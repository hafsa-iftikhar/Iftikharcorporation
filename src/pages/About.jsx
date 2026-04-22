import "./About.css";
import { Helmet } from "react-helmet";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Shirts", img: "/images/shirts.webp", link: "/tshirts" },
  { id: 2, name: "Tees", img: "/images/tshirt.webp", link: "/polo" },
  { id: 3, name: "Hoodies", img: "/images/hoodie.webp", link: "/hoodies" },
  { id: 4, name: "Bottoms", img: "/images/pants.webp", link: "/pants" },
  { id: 5, name: "Polo", img: "/images/polo.webp", link: "/polo" },
];
/*****************ADDED SECTION ************************/
const slides = [
  {
    id: 1,
    type: "image",
    image: "/images/foraboutus.webp",
    title: "Where Fabric Becomes Fashion",
    subtitle: "Garment Manufacturing in Pakistan",
  },
  {
    id: 2,
    type: "design",
  },
];

export default function About() {

  /****************ABOUT US SECTION ********************/
  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("about-visible");
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);
  /******************ADDED SECTION **********************/
  useEffect(() => {
  const section = document.querySelector(".knove-slider-section");

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

  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section);
  };
}, []);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };
  /******************FOURTH SECTION **********************/
 const stagRef = useRef(null);

useEffect(() => {
  const node = stagRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("stag-visible");
        observer.unobserve(node); // 🔥 run only once
      }
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px", // 🔥 fixes early trigger issues
    }
  );

  observer.observe(node);

  return () => observer.disconnect();
}, []); 

  return (
      <>
      <Helmet>
  {/* BASIC SEO */}
  <title>About Us | Iftikhar Corporation - Premium Garment Manufacturing</title>
  <meta name="description" content="Learn about Iftikhar Corporation, a premium garment manufacturer specializing in sweaters, tees, and high-quality textile production in Pakistan." />
  <meta name="keywords" content="garments manufacturing Pakistan, sweater factory, clothing manufacturer, textile company Pakistan, Iftikhar Corporation" />
  <meta name="author" content="Iftikhar Corporation" />

  {/* ROBOTS */}
  <meta name="robots" content="index, follow" />

  {/* VIEWPORT */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="About Iftikhar Corporation" />
  <meta property="og:description" content="Premium garment manufacturing company specializing in high-quality sweaters, tees, and textiles." />
  <meta property="og:image" content="https://ictextile.com/images/aboutbackground.webp" />
  <meta property="og:url" content="https://ictextile.com/about" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Iftikhar Corporation" />
  <meta name="twitter:description" content="Premium garment manufacturing company in Pakistan." />
  <meta name="twitter:image" content="https://ictextile.com/images/aboutbackground.webp" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://ictextile.com/about" />

  {/* STRUCTURED DATA (SEO BOOST) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Iftikhar Corporation",
      "url": "https://ictextile.com",
      "logo": "https://ictextile.com/logo.png",
      "description": "Premium garment manufacturing company in Pakistan.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK"
      }
    }
    `}
  </script>
</Helmet>
    {/* ========================= FIRSTE SECTION ========================= */}
    <section className="about-intro">
      <img 
        src="/images/aboutbackground.webp" 
        alt="Iftikhar Corporation garment factory background"
        className="about-bg"
      />

      <div className="about-text">
        <h2>Discover</h2>
        <h1>Iftikhar Corporation</h1>
        <p>The Craft Behind Every Thread</p>
      </div>
    </section>
    {/* ========================= SECOND SECTION ========================= */}
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
{/* ========================= ADDED SECTION ========================= */}
<section className="knove-slider-section">
  <div
    className="knove-slider-track"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {slides.map((slide) => (
      <section key={slide.id} className="knove-slide">

        {/* IMAGE SLIDE */}
        {slide.type === "image" && (
          <>
            <div
              className="knove-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            <div className="knove-overlay"></div>

            <div className="knove-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </>
        )}

        {/* DESIGN SLIDE */}
        {slide.type === "design" && (
          <div className="knove-design">
            <h1 className="design-title">Color Selection</h1>
              <div className="design-weights">
                <span>Neutral Tone</span>
                <span>Core Shade</span>
                <span>Bold Accent</span>
              </div>
            <div className="color-palette">
              <div style={{ background: "#ffffff" }}></div>
              <div style={{ background: "#dcd7cf" }}></div>
              <div style={{ background: "#7A0114" }}></div>
              <div style={{ background: "#e6e6e6" }}></div>
              <div style={{ background: "#707070" }}></div>
              <div style={{ background: "#333333" }}></div>
              <div style={{ background: "#271A1E" }}></div>
            </div>
          </div>
        )}

      </section>
    ))}
  </div>

  {/* ARROWS */}
  <button className="knove-arrow knove-left" onClick={prevSlide}>
    &#10094;
  </button>

  <button className="knove-arrow knove-right" onClick={nextSlide}>
    &#10095;
  </button>
</section>

    {/* ========================= THIRD SECTION ========================= */}
<section className="about-section" ref={sectionRef}>

  {/* LEFT - VIDEO */}
  <div className="about-video-wrapper">
    <video
      src="/images/Factory1.mp4"
      className="about-video"
      autoPlay
      loop
      muted
      playsInline
    />
    <button
      className="mute-btn"
      onClick={(e) => {
        const video = e.target.previousElementSibling;
        video.muted = !video.muted;
        e.target.innerHTML = video.muted
          ? "🔇"
          : "🔊"; // speaker icons
      }}
    >
      🔇
    </button>
  </div>

  {/* RIGHT - CONTENT */}
  <div className="about-content-wrapper">
    <h2>About Us</h2>
    <h3>Inside Iftikhar Corporation</h3>
    <p> At Iftikhar Corporation, we specialize in manufacturing premium quality garments with a strong focus on precision, consistency, and modern production standards. Our process is driven by skilled craftsmanship, attention to detail, and a deep understanding of fabric and design. By combining experienced hands with advanced technology, we ensure every piece meets the highest level of quality. From sourcing to final stitching, we are committed to delivering excellence in every thread.</p>
  </div>

</section>
    {/* ========================= FOURTH SECTION ========================= */}
<section className="stag-section" ref={stagRef}>
  <div className="stag-header">
    <h2 className="stag-heading">Crafted by Us</h2>
    <p className="stag-subheading">
      Premium Garments, Manufactured with Precision
    </p>
  </div>

  <div className="stag-wrapper">
    {categories.map((item) => (
      <Link to={item.link} key={item.id} className="stag-card">
        <img src={item.img} alt={item.name} />

        <div className="stag-overlay">
          <span>{item.name}</span>
        </div>
      </Link>
    ))}
  </div>
</section>
    </>
  );
}
