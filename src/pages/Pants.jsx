import { useState, useEffect } from "react";
import "./Pants.css";
import { Helmet } from "react-helmet";

const pantsProducts = [
  {
  id: 1,
  name: "Striped Shirt",
  images: ["/images/stripedshirt3.webp"],
},
{
  id: 2,
  name: "Fleece Cargo Trousers",
  images: ["/images/fleececargotrouser.webp"],
},
{
  id: 3,
  name: "Fleece Cargo Shorts",
  images: ["/images/fleececargoshorts.webp"],
},
{
  id: 4,
  name: "Fleece Shorts",
  images: ["/images/fleeceshort.webp"],
},
{
  id: 5,
  name: "Fleece Trousers",
  images: ["/images/fleecetrouser.webp"],
},
{
  id: 6,
  name: "Jogger Pants",
  images: ["/images/joggerspant.webp"],
},
{
  id: 7,
  name: "Linen Trousers",
  images: ["/images/linentrousers.webp"],
},
{
  id: 8,
  name: "Pajama Pants",
  images: ["/images/pajamas.webp"],
},
{
  id: 9,
  name: "Straight Dress Pants",
  images: ["/images/straightdresspants.webp"],
},
];

export default function PantsPage() {
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
  <title>Bottoms Collection | Iftikhar Corporation</title>

  <meta
    name="description"
    content="Explore premium bottoms including pants and trousers by Iftikhar Corporation. Expert garment manufacturing with modern fit and durability."
  />

  <meta
    name="keywords"
    content="pants Pakistan, trousers Pakistan, bottoms manufacturer, garment factory Pakistan, custom pants manufacturing"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Bottoms Collection - Iftikhar Corporation" />
  <meta property="og:description" content="Premium pants and trousers with modern design and comfort." />
  <meta property="og:image" content="https://ictextile.com/images/pants1.webp" />
  <meta property="og:url" content="https://ictextile.com/bottoms" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bottoms Collection" />
  <meta name="twitter:description" content="High-quality pants and trousers collection." />
  <meta name="twitter:image" content="https://ictextile.com/images/pants1.webp" />

  {/* Canonical */}
  <link rel="canonical" href="https://ictextile.com/bottoms" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Bottoms Collection",
      "description": "Premium pants and trousers by Iftikhar Corporation",
      "url": "https://ictextile.com/bottoms"
    }
    `}
  </script>
</Helmet>
    
      {/* HERO */}
      <section className="pants-hero">
        <div className="pants-overlay"></div>
        <div className="pants-content">
          <h1>BOTTOMS</h1>
          <p>
            Stylish and comfortable pants designed for everyday and formal wear.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="pants-collection">
        <div className="pants-header">
          <h2>BOTTOMS</h2>
        </div>

        <div className="pants-grid">
          {pantsProducts.map((item) => (
            <div
              className="pants-card"
              key={item.id}
              onClick={() => open(item)}
            >
              <div className="pants-img-wrap">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="pants-modal" onClick={close}>
          <div
            className="pants-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[index]}
              alt="preview"
              className="pants-modal-img"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />

            <button className="pants-close" onClick={close}>
              ✕
            </button>

            <div className="pants-dots">
              {selected.images.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "pants-active-dot" : ""}
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