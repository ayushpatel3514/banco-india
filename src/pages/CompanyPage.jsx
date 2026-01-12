import React, { useEffect } from "react";
import "./CompanyPage.css";

/**
 * DATA
 */

const highlights = [
  {
    title: "Engine cooling systems",
    body:
      "Complete range of engine cooling products engineered for passenger, commercial and off-highway vehicles with a strong focus on efficiency and durability.",
  },
  {
    title: "Engine sealing systems",
    body:
      "High-performance gasket solutions designed to deliver reliable sealing and long service life across demanding applications.",
  },
  {
    title: "Integrated solutions",
    body:
      "End-to-end design, development and manufacturing support that helps customers optimise performance, cost and time-to-market.",
  },
];

const timeline = [
  { year: "1961", label: "Inception of Banco Products (India) Ltd." },
  { year: "1987", label: "Technology collaborations & capacity expansion" },
  { year: "1996", label: "New plants and diversification" },
  { year: "2003", label: "Global customer base and exports" },
  { year: "2010", label: "State-of-the-art manufacturing upgrades" },
  { year: "2015", label: "Strengthening global footprint" },
  { year: "2016+", label: "Continuous innovation and growth" },
];

const plants = [
  {
    name: "Banco Products (India) Limited – Bil",
    body:
      "Flagship manufacturing facility with integrated capabilities for gaskets and engine cooling products.",
  },
  {
    name: "Banco Products (India) Limited – SEZ (Unit) – Vadodara",
    body:
      "Special economic zone unit focused on export-oriented production with world-class infrastructure.",
  },
  {
    name: "Banco gaskets (India) ltd.",
    body:
      "Specialised manufacturing unit delivering precision gaskets and sealing solutions.",
  },
];

const partners = [
  {
    name: "Nederlandse Radiateuren Fabriek B. V. (NRF)",
    body:
      "Strategic association supporting access to advanced technologies, global markets and a strong aftermarket presence.",
  },
];

const segments = [
  {
    title: "OEM",
    body:
      "Partnering with leading OEMs to co-create solutions that meet stringent performance, emission and lifecycle requirements.",
  },
  {
    title: "Aftermarket",
    body:
      "Wide product portfolio for the global aftermarket built on quality, reliability and ease of fitment.",
  },
  {
    title: "Export",
    body:
      "Serving customers in multiple continents with products designed to match local operating conditions and standards.",
  },
];

const values = [
  {
    title: "Innovation",
    body:
      "Constantly exploring new materials, designs and technologies to deliver better performance and value.",
  },
  {
    title: "Quality first",
    body:
      "Robust systems, certified processes and rigorous testing ensure consistent, reliable products.",
  },
  {
    title: "People & culture",
    body:
      "A culture that encourages learning, initiative and collaboration, helping people grow with the organisation.",
  },
  {
    title: "Customer focus",
    body:
      "Deep engagement with customers to understand their challenges and deliver solutions that create long-term partnerships.",
  },
];

/**
 * We are BANCO – uses provided image URLs
 */
const weAreBanco = [
  {
    title: "The Banco DNA",
    body:
      "The company’s management and all its employees are united by shared values. These values stand for what drives us forward and what forms the basis of our actions, engagement, and commitment to all our stakeholders.",
    image:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/dna.jpg",
    imageFirst: true,
  },
  {
    title: "Innovation",
    body:
      "Our creativity, our constant search to find new solutions to our customers’ needs drives our actions. A thorough understanding of customers’ requirements helps us to tailor our products and offer customised solutions.",
    image:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/innovation.jpg",
    imageFirst: false,
  },
  {
    title: "Passion for performance",
    body:
      "With an eye on top performance, we try hard, we overcome adversities and never let up in our excellence endeavours. Whether it is about meeting high-quality standards or about delivery expectations, we give our best.",
    image:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/passion-for-performance.jpg",
    imageFirst: true,
  },
  {
    title: "Team spirit",
    body:
      "For us at Banco, teamwork means everything as we stand united, rely on each other and complement each other’s efforts with a single-minded purpose of bringing success for Banco, customers and all stakeholders.",
    image:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/team-spirit.jpg",
    imageFirst: false,
  },
];

const CompanyPage = () => {
  // Scroll-triggered animations for left/right reveals
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.intersectionRatio >= 0.35) {
            el.classList.add("is-visible");
          } else {
            el.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: [0, 0.35, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="company-page">
      {/* HERO */}
      <section className="company-hero">
        <div className="company-hero-media">
          <img
            src="/images/company-hero.jpg"
            alt="Banco manufacturing campus"
          />
        </div>

        <div className="company-hero-overlay">
          <div className="company-hero-label">Company</div>
          <h1 className="company-hero-title">BANCO: Born of enterprise</h1>
          <p className="company-hero-lead">
            From a single manufacturing unit to a global presence in engine
            cooling and sealing systems, Banco continues to innovate,
            collaborate and deliver high-performance solutions worldwide.
          </p>
        </div>
      </section>

      {/* ABOUT + HIGHLIGHTS */}
      <section className="company-section company-about">
        <div className="company-section-header">
          <h2 className="company-kicker">About us</h2>
          <div className="company-underline" />
        </div>

        <div className="company-about-layout">
          <div className="company-about-text reveal-left">
            <p>
              Founded in 1961, Banco Products (India) Ltd. has carved a niche as
              a trusted partner for engine cooling and sealing systems across
              automotive and industrial applications. The organisation combines
              engineering excellence, process discipline and a relentless focus
              on quality to deliver dependable performance on every road and
              every route.
            </p>
            <p>
              Over the years, Banco has strengthened its capabilities in design,
              development, testing and manufacturing – building long-term
              relationships with OEMs and customers in India and worldwide.
            </p>
          </div>

          <div className="company-about-grid">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="company-card hover-lift reveal-right"
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDING FOOTPRINTS + TIMELINE */}
      <section className="company-section company-footprints">
        <div className="company-section-header">
          <h2 className="company-kicker">Expanding footprints</h2>
          <div className="company-underline" />
        </div>

        <div className="company-footprints-layout">
          <div className="company-footprints-text reveal-left">
            <p>
              Over decades, Banco has grown from a domestic manufacturer to a
              partner to global customers. Investments in new plants,
              technology upgrades and people have helped build a robust,
              future-ready foundation.
            </p>
            <p>
              Today, Banco’s footprint spans multiple manufacturing locations
              and markets, with a portfolio that addresses diverse segments –
              from passenger vehicles and commercial vehicles to off-highway
              equipment and industrial applications.
            </p>
          </div>

          <div className="company-timeline">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className="timeline-item hover-lift-small reveal-right"
                style={{ transitionDelay: `${0.15 + idx * 0.08}s` }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTS & SUBSIDIARIES */}
      <section className="company-section company-plants">
        <div className="company-section-header">
          <h2 className="company-kicker">Plants & subsidiaries</h2>
          <div className="company-underline" />
        </div>

        <div className="company-plants-grid">
          {plants.map((plant, idx) => (
            <article
              key={plant.name}
              className="company-plant-card hover-lift reveal-right"
              style={{ transitionDelay: `${0.1 + idx * 0.06}s` }}
            >
              <h3>{plant.name}</h3>
              <p>{plant.body}</p>
            </article>
          ))}

          {partners.map((partner, idx) => (
            <article
              key={partner.name}
              className="company-plant-card hover-lift is-partner reveal-right"
              style={{
                transitionDelay: `${0.1 + (plants.length + idx) * 0.06}s`,
              }}
            >
              <h3>{partner.name}</h3>
              <p>{partner.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MARKET SEGMENTS */}
      <section className="company-section company-segments">
        <div className="company-section-header">
          <h2 className="company-kicker">Market segments</h2>
          <div className="company-underline" />
        </div>

        <div className="company-segments-grid">
          {segments.map((seg, idx) => (
            <article
              key={seg.title}
              className="company-segment-card hover-lift reveal-right"
              style={{ transitionDelay: `${0.12 + idx * 0.07}s` }}
            >
              <div className="segment-tag">{seg.title}</div>
              <p>{seg.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* QUALITY & VALUES */}
      <section className="company-section company-values">
        <div className="company-section-header">
          <h2 className="company-kicker">Quality & values</h2>
          <div className="company-underline" />
        </div>

        <div className="company-values-layout">
          <div className="company-quality-block hover-lift reveal-left">
            <h3>Quality – our first priority</h3>
            <p>
              Quality is embedded into every stage of the value chain – from
              design and supplier selection to manufacturing, testing and
              logistics. Banco’s plants operate with certified systems and
              robust controls to ensure that every part performs as expected.
            </p>
            <ul>
              <li>Advanced testing and validation facilities</li>
              <li>Robust quality systems and certifications</li>
              <li>Continuous improvement culture on the shopfloor</li>
            </ul>
          </div>

          <div className="company-values-grid">
            {values.map((value, idx) => (
              <article
                key={value.title}
                className="company-value-card hover-lift reveal-right"
                style={{ transitionDelay: `${0.12 + idx * 0.07}s` }}
              >
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WE ARE BANCO */}
      <section className="company-section company-weare">
        <div className="company-section-header">
          <h2 className="company-kicker">We are BANCO</h2>
          <div className="company-underline" />
        </div>

        <div className="company-weare-grid">
          {weAreBanco.map((item, index) => {
            const imageClasses = `weare-media hover-lift ${
              item.imageFirst ? "reveal-left" : "reveal-right"
            }`;
            const textClasses = `weare-text ${
              item.imageFirst ? "reveal-right" : "reveal-left"
            }`;

            return (
              <div
                key={item.title}
                className={`weare-row ${
                  item.imageFirst ? "image-first" : "text-first"
                }`}
              >
                <div
                  className={imageClasses}
                  style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
                >
                  <img src={item.image} alt={item.title} />
                </div>
                <div
                  className={textClasses}
                  style={{ transitionDelay: `${0.18 + index * 0.08}s` }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
