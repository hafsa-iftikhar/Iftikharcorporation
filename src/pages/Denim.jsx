import { useState, useRef, useEffect } from "react";
import "./Denim.css";
import { Helmet } from "react-helmet";

const denimProducts = [
  {
    id: 1,
    name: "Classic Blue Denim",
    images: ["/images/denim.webp"],
  },
  {
    id: 2,
    name: "Washed Denim Fabric",
    images: ["/images/washed.webp"],
  },
  {
    id: 3,
    name: "Stretch Denim Material",
    images: ["/images/stretched.webp"],
  },
  {
    id: 4,
    name: "Raw Denim",
    images: ["/images/raw.webp"],
  },
];

export default function DenimPage() {
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
  <title>Denim Fabric Manufacturing | Iftikhar Corporation</title>

  <meta
    name="description"
    content="Premium denim fabric manufacturing by Iftikhar Corporation. Durable, stylish, and high-quality textile production for global markets."
  />

  <meta
    name="keywords"
    content="denim fabric Pakistan, denim manufacturer, jeans fabric supplier, textile company Pakistan"
  />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Denim Fabric - Iftikhar Corporation" />
  <meta property="og:description" content="High-quality denim fabric with durability and modern finish." />
  <meta property="og:image" content="https://yourwebsite.com/images/denim1.webp" />
  <meta property="og:url" content="https://yourwebsite.com/denim" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Denim Fabric" />
  <meta name="twitter:description" content="Premium denim textile production." />
  <meta name="twitter:image" content="https://yourwebsite.com/images/denim1.webp" />

  <link rel="canonical" href="https://yourwebsite.com/denim" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Denim Fabric",
      "description": "Premium denim fabric by Iftikhar Corporation",
      "brand": {
        "@type": "Brand",
        "name": "Iftikhar Corporation"
      }
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="denim-hero">
        <div className="denim-overlay"></div>
        <div className="denim-content">
          <h1>DENIM</h1>
          <p>
            Durable denim fabrics crafted for modern fashion, comfort, and long-lasting wear.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="denim-collection">
        <div className="denim-header">
          <h2>DENIM FABRIC</h2>
        </div>

        <div className="denim-grid">
          {denimProducts.map((item) => (
            <div
              className="denim-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="denim-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="denim-modal" onClick={close}>
          <div
            className="denim-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt={selected.name}
              className="denim-modal-img"
            />

            <button className="denim-close" onClick={close}>
              ✕
            </button>

            <div className="denim-dots">
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