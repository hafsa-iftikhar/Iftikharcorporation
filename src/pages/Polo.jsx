import { useState, useRef, useEffect } from "react";
import "./Polo.css";
import { Helmet } from "react-helmet";

const poloProducts = [
  {
    id: 1,
    name: "Navy Long-Sleeve Polo",
    images: ["/images/blue1.webp", "/images/blue2.webp", "/images/blue3.webp"],
  },
  {
    id: 2,
    name: "Texture Polo",
    images: ["/images/texturepolo1.webp", "/images/texturepolo2.webp", "/images/texturepolo3.webp", "/images/texturepolo5.webp", "/images/texturepolo4.webp"],
  },
  {
    id: 3,
    name: "Full sleeve Drop needle Polo",
    images: ["/images/Fullsleevedrop1.webp", "/images/Fullsleevedrop2.webp", "/images/Fullsleevedrop3.webp"],
  },
  {
    id: 4,
    name: "Full sleeve Button-down Polo",
    images: ["/images/Fullsleeve Button-down Polo2.webp", "/images/Fullsleeve Button-down Polo1.webp"],
  },
  {
  id: 5,
  name: "Drop Needle Polo",
  images: ["/images/DropNeedlePolo1.webp", "/images/DropNeedlePolo2.webp", "/images/DropNeedlePolo3.webp"],
},
{
  id: 6,
  name: "White Long-Sleeve Polo",
  images: ["/images/whiteLongSleeve Polo1.webp", "/images/whiteLongSleeve Polo2.webp"],
},
{
  id: 7,
  name: "Long-Sleeve Polo",
  images: ["/images/LongSleevePolo1.webp", "/images/LongSleevePolo2.webp"],
},
{
  id: 8,
  name: "Short sleeve Button-down Polo",
  images: ["/images/Shortsleeve1.webp", "/images/Shortsleeve2.webp", "/images/Shortsleeve3.webp"],
},
  {
  id: 9,
  name: "Drop Shoulder T-Shirt",
  images: ["/images/dropshoulder1.webp", "/images/dropshoulder2.webp"],
},
{
  id: 10,
  name: "Crew Neck T-Shirt",
  images: ["/images/crewneck1.webp", "/images/crewneck2.webp"],
},
{
  id: 11,
  name: "Henley T-Shirt",
  images: ["/images/Henley1.webp", "/images/Henley2.webp", "/images/Henley3.webp"],
},
{
  id: 12,
  name: "Printed T-Shirt",
  images: ["/images/printed1.webp", "/images/printed2.webp"],
},
{
  id: 13,
  name: "Tie-Dye T-Shirt",
  images: ["/images/tiendye1.webp", "/images/tiendye2.webp"],
},
{
  id: 14,
  name: "Printed Tee",
  images: ["/images/blacktee1.webp", "/images/blacktee2.webp", "/images/greentee1.webp", "/images/greentee2.webp", "/images/whitetee2.webp","/images/whitetee3.webp"],
},
];

export default function PoloPage() {
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
  <title>Polo & Tees Collection | Iftikhar Corporation</title>
  <meta
    name="description"
    content="Explore premium polo shirts and tees by Iftikhar Corporation. High-quality garment manufacturing with modern fits and durable fabrics."
  />
  <meta
    name="keywords"
    content="polo shirts Pakistan, t shirts manufacturer, custom tees, garment manufacturing Pakistan, Iftikhar Corporation"
  />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Polo & Tees Collection - Iftikhar Corporation" />
  <meta property="og:description" content="Premium polos and tees with modern design and comfort." />
  <meta property="og:image" content="https://ictextile.com/images/polo1.webp" />
  <meta property="og:url" content="https://ictextile.com/polo" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Polo & Tees Collection" />
  <meta name="twitter:description" content="Premium polo shirts and tees collection." />
  <meta name="twitter:image" content="https://ictextile.com/images/polo1.webp" />

  <link rel="canonical" href="https://ictextile.com/polo" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Polo & Tees Collection",
      "description": "Premium polo shirts and tees by Iftikhar Corporation",
      "url": "https://ictextile.com/polo"
    }
    `}
  </script>
</Helmet>
      {/* HERO */}
      <section className="polo-hero">
        <div className="polo-overlay"></div>
        <div className="polo-content">
          <h1>POLO & TEES</h1>
          <p>
            Premium polo shirts designed for comfort, elegance, and everyday wear.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="polo-collection">
        <div className="polo-header">
          <h2>POLO COLLECTION</h2>
        </div>

        <div className="polo-grid">
          {poloProducts.map((item) => (
            <div
              className="polo-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="polo-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="polo-modal" onClick={close}>
          <div
            className="polo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt="preview"
              className="polo-modal-img"
            />

            <button className="polo-close" onClick={close}>
              ✕
            </button>

            <div className="polo-dots">
              {selected.images.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "polo-active-dot" : ""}
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