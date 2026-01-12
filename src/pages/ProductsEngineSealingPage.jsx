import React, { useEffect, useRef } from "react";
import "./ProductsEngineSealingPage.css";

const SEALING_PRODUCTS = [
  {
    title: "Rubber pre-coated beaded gaskets",
    body:
      "Unique combination of fibre-reinforced elastomeric beaded coating. Raised beads provide high unit sealing pressure with excellent recovery.",
    img: "/images/prod-sealing-1.png",
    cta: "Read More",
  },
  {
    title: "Rubber cork gaskets",
    body:
      "Rubber cork material combines the compressibility of cork with high mechanical strength and dimensional stability of rubber.",
    img: "/images/prod-sealing-2.png",
    cta: "Read More",
  },
  {
    title: "Copper gaskets",
    body:
      "Copper is stronger than many composite head gaskets yet still malleable to conform to demanding sealing standards for high-output engines.",
    img: "/images/prod-sealing-3.png",
    cta: "Read More",
  },
  {
    title: "Aluminium edge gaskets",
    body:
      "Edge-moulded aluminium gaskets are made from premium alloys to deliver leak-proof sealing and withstand aggressive media and temperatures.",
    img: "/images/prod-sealing-4.png",
    cta: "Read More",
  },
];

const QR_CODES = [
  { label: "TRACTOR CATALOGUE", img: "/images/qr-tractor.png" },
  { label: "CAR CATALOGUE", img: "/images/qr-car.png" },
  { label: "COMMERCIAL VEHICLE CATALOGUE", img: "/images/qr-cv.png" },
];

const ProductsEngineSealingPage = () => {
  const stripRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(
      ".ps-reveal-left, .ps-reveal-right, .ps-reveal-up, .ps-card, .ps-qr-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollByCard = (direction) => {
    if (!stripRef.current) return;
    const card = stripRef.current.querySelector(".ps-card");
    const step = card ? card.offsetWidth + 24 : 280;

    stripRef.current.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div className="ps-page">
      {/* INTRO */}
      <section className="ps-intro">
        <div className="ps-intro-inner ps-reveal-left">
          <h1 className="ps-title">Engine sealing system</h1>
          <div className="ps-title-underline" />
          <p>
            With the advent of powerful engines and higher fuel efficiency,
            engine sealing systems have become critical for both automotive and
            non-automotive applications. Banco offers a wide range of seals and
            gaskets in metallic, non-metallic and composite materials.
          </p>
          <p>
            Our highly enabled testing and validation capabilities help us
            deliver advanced sealing solutions across cylinder head gaskets,
            jointing gaskets and rubber / cork gaskets.
          </p>
        </div>
      </section>

      {/* DARK BAND – products strip */}
      <div className="ps-band">
        <section className="ps-hero">
          <div className="ps-hero-overlay ps-reveal-left">
            <h2 className="ps-hero-title">
              The engine sealing products produced at Banco
            </h2>
            <div className="ps-hero-underline" />
            <p className="ps-hero-lead">
              Our portfolio includes sealing gaskets and jointing gaskets in a
              wide variety of metallic, composite and rubber / cork materials.
            </p>
          </div>
        </section>

        <section className="ps-strip-section">
          <div className="ps-strip-wrap">
            <button
              type="button"
              className="ps-arrow ps-arrow-left"
              onClick={() => scrollByCard("prev")}
              aria-label="Previous sealing products"
            >
              &#10094;
            </button>

            <div className="ps-strip" ref={stripRef}>
              {SEALING_PRODUCTS.map((p, idx) => (
                <article
                  key={p.title}
                  className={`ps-card ps-neon-${idx}`}
                  style={{ transitionDelay: `${0.08 + idx * 0.06}s` }}
                >
                  <div className="ps-card-img">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="ps-card-body">
                    <h3 className="ps-card-title">{p.title}</h3>
                    <p className="ps-card-text">{p.body}</p>
                    <button type="button" className="ps-card-cta">
                      {p.cta}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="ps-arrow ps-arrow-right"
              onClick={() => scrollByCard("next")}
              aria-label="Next sealing products"
            >
              &#10095;
            </button>
          </div>
        </section>
      </div>

      {/* QR CATALOGUE */}
      <section className="ps-catalogue">
        <h2 className="ps-catalogue-title">Product Catalogue</h2>
        <p className="ps-catalogue-sub">
          Scan the QR code below for more details.
        </p>

        <div className="ps-catalogue-grid">
          {QR_CODES.map((qr, idx) => (
            <div
              key={qr.label}
              className="ps-qr-card ps-reveal-up"
              style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
            >
              <div className="ps-qr-img-wrap">
                <img src={qr.img} alt={qr.label} />
              </div>
              <div className="ps-qr-label">{qr.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsEngineSealingPage;
