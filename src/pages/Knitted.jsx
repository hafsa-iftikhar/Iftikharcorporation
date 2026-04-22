import { useState, useRef, useEffect } from "react";
import "./Knitted.css";
import { Helmet } from "react-helmet";

const knittedProducts = [
  {
    id: 1,
    name: "2-Fleece Fabric",
    images: ["/images/2 fleece.webp"],
  },
  {
    id: 2,
    name: "3-Fleece Fabric",
    images: ["/images/3 fleece.webp"],
  },
  {
    id: 3,
    name: "Polar Fleece Fabric",
    images: ["/images/polar fleece.webp"],
  },
  {
    id: 4,
    name: "Sherpa Fabric",
    images: ["/images/sherpa.webp"],
  },
  {
    id: 5,
    name: "Rib Knit Fabric",
    images: ["/images/rib.webp"],
  },
  {
    id: 6,
    name: "Thermal Knit Fabric",
    images: ["/images/thermal.webp"],
  },
  {
    id: 7,
    name: "Sponge Fabric",
    images: ["/images/sponge.webp"],
  },
  {
    id: 8,
    name: "French Terry Fabric",
    images: ["/images/french terry.webp"],
  },
  {
    id: 9,
    name: "Jersey Knit Fabric",
    images: ["/images/jersey.webp"],
  },
  {
    id: 10,
    name: "Loop Terry Fabric",
    images: ["/images/loop terry.webp"],
  },
  {
    id: 11,
    name: "Pique Fabric",
    images: ["/images/pique.webp"],
  },
];

export default function KnittedPage() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
  <title>Knitted Fabric Manufacturing | Iftikhar Corporation</title>

  <meta
    name="description"
    content="Premium knitted fabric manufacturing by Iftikhar Corporation. High-quality textile production with precision, durability, and modern techniques."
  />

  <meta
    name="keywords"
    content="knitted fabric Pakistan, knit fabric manufacturer, textile production Pakistan, garment fabric supplier"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Knitted Fabric - Iftikhar Corporation" />
  <meta property="og:description" content="High-quality knitted fabric manufacturing." />
  <meta property="og:image" content="https://yourwebsite.com/images/knitted1.webp" />
  <meta property="og:url" content="https://yourwebsite.com/knitted" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Knitted Fabric" />
  <meta name="twitter:description" content="Premium knitted textile production." />
  <meta name="twitter:image" content="https://yourwebsite.com/images/knitted1.webp" />

  <link rel="canonical" href="https://yourwebsite.com/knitted" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Knitted Fabric",
      "description": "High-quality knitted fabric by Iftikhar Corporation",
      "brand": {
        "@type": "Brand",
        "name": "Iftikhar Corporation"
      }
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="knit-hero">
        <div className="knit-overlay"></div>
        <div className="knit-content">
          <h1>KNITTED</h1>
          <p>
            Premium knitted fabrics crafted for comfort, flexibility, and modern apparel.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="knit-collection">
        <div className="knit-header">
          <h2>KNITTED FABRIC</h2>
        </div>

        <div className="knit-grid">
          {knittedProducts.map((item) => (
            <div
              className="knit-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="knit-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="knit-modal" onClick={close}>
          <div
            className="knit-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt="preview"
              className="knit-modal-img"
            />

            <button className="knit-close" onClick={close}>
              ✕
            </button>

            <div className="knit-dots">
              {selected.images.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "active-dot" : ""}
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