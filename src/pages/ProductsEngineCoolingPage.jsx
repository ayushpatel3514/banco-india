import React, { useEffect } from "react";
import "./ProductsEngineCoolingPage.css";

const PRODUCTS = [
  {
    title: "Custom designed heat exchangers",
    body:
      "Banco has proven capabilities and expertise to provide customised engine cooling systems that meet demanding duty cycles and packaging requirements.",
    img:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/custom-designed-heat-exchangers-small.jpg",
    cta: "Read More",
  },
  {
    title: "Fuel cooler",
    body:
      "Exhaust gas recirculation cooler (EGR-C) and fuel coolers are developed to meet stringent emission norms and to deliver improved fuel efficiency.",
    img:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/fuel-cooler-small.jpg",
    cta: "Read More",
  },
  {
    title: "Oil coolers and condensers",
    body:
      "Oil coolers / condensers are available in extruded, bar & plate, plate, drawn-cup and concentric constructions to match diverse performance needs.",
    img:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/oil-cooler.jpg",
    cta: "Read More",
  },
  {
    title: "Charge air coolers (CAC) / intercoolers / after coolers",
    body:
      "Banco’s range of charge air coolers and after-coolers has proved very successful in improving engine intake temperature control and performance.",
    img:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/charged_air_cooler.jpg",
    cta: "Read More",
  },
  {
    title: "Radiator",
    body:
      "Banco’s radiators are designed to deliver reliable thermal performance under diverse operating conditions and duty cycles.",
    img:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/radiator.jpg",
    cta: "Read More",
  },
];

const ProductsEngineCoolingPage = () => {
  // reveal animation for headings / text / cards
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(
      ".reveal-left, .reveal-right, .reveal-up"
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

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pr-page">
      {/* TOP INTRO – white section */}
      <section className="pr-intro">
        <div className="pr-intro-inner reveal-left">
          <div className="pr-intro-header">
            <h1 className="pr-intro-title">Engine cooling system</h1>
            <div className="pr-intro-underline" />
          </div>

          <p>
            The product range of Banco is highly flexible, with multiple design
            options in tube row and fin density together with material choices
            that help optimise cooling system performance. A wide combination of
            fin and tube designs, welded or extruded tubes, as well as brazed
            constructions, enables us to meet specific application needs for
            high engine performance.
          </p>
          <p>
            Banco’s engine cooling products are also used for low-volume markets
            such as agriculture, construction, specialty vehicles and bus
            applications. The range includes radiators, charge air coolers, oil
            coolers, condensers, fuel coolers, battery coolers, inverter
            coolers and accessories such as expansion tanks, fan modules, fan
            shrouds and mounting hardware.
          </p>
        </div>
      </section>

      {/* LIGHT BAND – hero + product cards */}
      <div className="pr-band">
        {/* hero heading */}
        <section className="pr-hero">
          <div className="pr-hero-inner reveal-left">
            <h2 className="pr-title">
              Banco’s product range of heat exchangers
            </h2>
            {/* underline removed here */}
            <p className="pr-lead">
              The engine cooling portfolio covers radiators, charge air coolers,
              oil coolers, fuel coolers and condensers, engineered for
              efficiency, durability and practical packaging across diverse
              applications.
            </p>
          </div>
        </section>

        {/* static grid of cards (3 + 2 centred) */}
        <section className="pr-section">
          <div className="pr-grid">
            {PRODUCTS.map((p, idx) => (
              <article
                key={p.title}
                className="pr-card reveal-up"
                style={{ transitionDelay: `${0.1 + idx * 0.07}s` }}
              >
                <div className="pr-card-img">
                  <img src={p.img} alt={p.title} />
                </div>

                <div className="pr-card-body">
                  <h3 className="pr-card-title">{p.title}</h3>
                  <p className="pr-card-text">{p.body}</p>
                  <button type="button" className="pr-card-cta">
                    {p.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsEngineCoolingPage;
