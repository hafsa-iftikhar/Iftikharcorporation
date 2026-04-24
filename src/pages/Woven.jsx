import { useState, useRef, useEffect } from "react";
import "./Woven.css";
import { Helmet } from "react-helmet";

const wovenProducts = [
  {
    id: 1,
    name: "Irish linen",
    images: ["/images/irish linen.webp"],
  },
  {
    id: 2,
    name: "100% Cotton",
    images: ["/images/cotton.webp"],
  },
  {
    id: 3,
    name: "Striped fabric",
    images: ["/images/striped.webp"],
  },
  {
    id: 4,
    name: "Checked fabrics",
    images: ["/images/checked.webp"],
  },
];

export default function WovenPage() {
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

  /************swipe navigation *************/
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 50) {
    next(); // swipe left → next
  }

  if (touchEnd - touchStart > 50) {
    prev(); // swipe right → previous
  }
};

  return (
    <>
    <Helmet>
  <title>Woven Fabric Manufacturing | Iftikhar Corporation</title>

  <meta
    name="description"
    content="Expert woven fabric manufacturing by Iftikhar Corporation. Durable and premium textile solutions for global standards."
  />

  <meta
    name="keywords"
    content="woven fabric Pakistan, woven textile manufacturer, fabric supplier Pakistan, textile factory"
  />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Woven Fabric - Iftikhar Corporation" />
  <meta property="og:description" content="Premium woven fabric production with durability and quality." />
  <meta property="og:image" content="https://ictextile.com/images/woven1.webp" />
  <meta property="og:url" content="https://ictextile.com/woven" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Woven Fabric" />
  <meta name="twitter:description" content="High-quality woven textile manufacturing." />
  <meta name="twitter:image" content="https://ictextile.com/images/woven1.webp" />

  <link rel="canonical" href="https://ictextile.com/woven" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Woven Fabric",
      "description": "Premium woven fabric by Iftikhar Corporation",
      "brand": {
        "@type": "Brand",
        "name": "Iftikhar Corporation"
      }
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="woven-hero">
        <div className="woven-overlay"></div>
        <div className="woven-content">
          <h1>WOVEN</h1>
          <p>
            Premium woven fabrics designed for durability, structure, and timeless fashion.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="woven-collection">
        <div className="woven-header">
          <h2>WOVEN FABRIC</h2>
        </div>

        <div className="woven-grid">
          {wovenProducts.map((item) => (
            <div
              className="woven-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="woven-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="woven-modal" onClick={close}>
          <div
            className="woven-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt={selected.name}
              className="woven-modal-img"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />

            <button className="woven-close" onClick={close}>
              ✕
            </button>

            <div className="woven-dots">
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