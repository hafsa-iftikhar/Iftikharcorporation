import { useState, useEffect } from "react";
import "./Hoodies.css";
import { Helmet } from "react-helmet";

const hoodiesProducts = [
  {
    id: 1,
    name: "Cut & Sew Hoodie",
    images: ["/images/cut & sew3.webp", "/images/cut & sew2.webp", "/images/cut & sew1.webp"],
  },
  {
    id: 2,
    name: "Printed Hoodie",
    images: ["/images/printedhoodie2.webp", "/images/printedhoodie1.webp"],
  },
  {
    id: 3,
    name: "Printed Hoodie",
    images: ["/images/printedhoodie3.webp", "/images/printedhoodie4.webp"],
  },
  {
    id: 4,
    name: "Oversized Hoodie",
    images: ["/images/oversizehoodie1.webp","/images/oversizehoodie2.webp","/images/oversizehoodie3.webp"],
  },
  {
    id: 5,
    name: "Zip-Up Hoodie",
    images: ["/images/zip-uphoodie1.webp","/images/zip-uphoodie2.webp","/images/zip-uphoodie3.webp"],
  },
  {
    id: 6,
    name: "Sweatshirt",
    images: ["/images/sweatshirt1.webp","/images/sweatshirt2.webp","/images/sweatshirt3.webp"],
  },
  {
    id: 7,
    name: "Graphic Print Hoodie",
    images: ["/images/graphicprint1.webp","/images/graphicprint3.webp","/images/graphicprint2.webp"],
  },
];

export default function HoodiesPage() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const open = (item) => {
    setSelected(item);
    setIndex(0);
  };

  const close = () => setSelected(null);

  const next = () => {
    if (!selected) return;
    setIndex((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    if (!selected) return;
    setIndex((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const keyHandler = (e) => {
      if (!selected) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [selected]);

  return (
    <>
    <Helmet>
  <title>Hoodies & Sweatshirts | Iftikhar Corporation</title>

  <meta
    name="description"
    content="Premium hoodies and sweatshirts by Iftikhar Corporation. High-quality garment manufacturing with comfort, durability, and modern style."
  />

  <meta
    name="keywords"
    content="hoodies Pakistan, sweatshirts Pakistan, hoodie manufacturer, sweatshirt manufacturer, garment factory Pakistan"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Hoodies & Sweatshirts - Iftikhar Corporation" />
  <meta property="og:description" content="Premium hoodies and sweatshirts collection." />
  <meta property="og:image" content="https://ictextile.com/images/oversizehoodie1.webp" />
  <meta property="og:url" content="https://ictextile.com/hoodies" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hoodies & Sweatshirts" />
  <meta name="twitter:description" content="Modern hoodies and sweatshirts collection." />
  <meta name="twitter:image" content="https://ictextile.com/yourwebsite.com/images/oversizehoodie1.webp" />

  {/* Canonical */}
  <link rel="canonical" href="https://ictextile.com/hoodies" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Hoodies & Sweatshirts",
      "description": "Premium hoodies and sweatshirts by Iftikhar Corporation",
      "url": "https://ictextile.com/hoodies"
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="hoodies-hero">
        <div className="hoodies-overlay"></div>
        <div className="hoodies-content">
          <h1>HOODIES</h1>
          <p>
            Premium hoodies designed for warmth, comfort, and modern streetwear style.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="hoodies-collection">
        <div className="hoodies-header">
          <h2>HOODIES COLLECTION</h2>
        </div>

        <div className="hoodies-grid">
          {hoodiesProducts.map((item) => (
            <div
              className="hoodies-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="hoodies-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="hoodies-modal" onClick={close}>
          <div
            className="hoodies-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt="preview"
              className="hoodies-modal-img"
            />

            <button className="hoodies-close" onClick={close}>
              ✕
            </button>

            <div className="hoodies-dots">
              {selected.images.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "hoodies-active-dot" : ""}
                  onClick={() => setIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}