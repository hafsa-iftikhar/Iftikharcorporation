import { useState, useEffect } from "react";
import "./Tshirts.css";
import { Helmet } from "react-helmet";

const shirtsProducts = [
  {
    id: 1,
    name: "striped shirt",
    images: ["/images/stripedshirt3.webp", "/images/stripedshirt2.webp", "/images/stripedshirt1.webp"],
  },
  {
    id: 2,
    name: "striped shirt",
    images: ["/images/shirtimage21.webp", "/images/shirtimage22.webp", "/images/shirtimage23.webp", "/images/shirtimage24.webp"]
  },
  {
    id: 3,
    name: "chambray shirt",
    images: ["/images/shirtimage1.webp", "/images/shirtimage1(1).webp", "/images/shirtimage2.webp", "/images/shirtimage3.webp", "/images/shirtimage4.webp"]
  },
  {
    id: 4,
    name: "chambray shirt",
    images: ["/images/shirtimage5.webp", "/images/shirtimage7.webp", "/images/shirtimage8.webp"]
  },
  {
    id: 5,
    name: "striped shirt",
    images: ["/images/shirtimage9.webp", "/images/shirtimage11.webp", "/images/shirtimage13.webp"],
  },
  {
    id: 6,
    name: "chambray shirt",
    images: ["/images/shirtimage17.webp","/images/shirtimage17(1).webp" , "/images/shirtimage16.webp", "/images/shirtimage14.webp", "/images/shirtimage15.webp"],
  },
];

export default function ShirtsPage() {
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
  <title>Shirts Collection | Iftikhar Corporation</title>
  <meta
    name="description"
    content="Discover high-quality shirts by Iftikhar Corporation. Expert garment manufacturing with premium fabrics and modern tailoring."
  />
  <meta
    name="keywords"
    content="shirts Pakistan, shirt manufacturer, formal shirts, custom shirts, textile company Pakistan"
  />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Shirts Collection - Iftikhar Corporation" />
  <meta property="og:description" content="Premium shirts with expert stitching and modern design." />
  <meta property="og:image" content="https://ictextile.com/images/shirt1.webp" />
  <meta property="og:url" content="https://ictextile.com/shirts" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shirts Collection" />
  <meta name="twitter:description" content="High-quality shirts collection." />
  <meta name="twitter:image" content="https://ictextile.com/images/shirt1.webp" />

  <link rel="canonical" href="https://ictextile.com/shirts" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Shirts Collection",
      "description": "Premium shirts by Iftikhar Corporation",
      "url": "https://ictextile.com/shirts"
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="shirts-hero">
        <div className="shirts-overlay"></div>
        <div className="shirts-content">
          <h1>SHIRTS</h1>
          <p>
            Premium shirts designed for style, comfort, and everyday elegance.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="shirts-collection">
        <div className="shirts-header">
          <h2>SHIRTS COLLECTION</h2>
        </div>

        <div className="shirts-grid">
          {shirtsProducts.map((item) => (
            <div
              className="shirts-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="shirts-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="shirts-modal" onClick={close}>
          <div
            className="shirts-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt="preview"
              className="shirts-modal-img"
            />

            <button className="shirts-close" onClick={close}>
              ✕
            </button>

            <div className="shirts-dots">
              {selected.images.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "shirts-active-dot" : ""}
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