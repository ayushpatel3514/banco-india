import React, { useEffect } from "react";
import "./IntegratedWarehousingLogisticsPage.css";

const IntegratedWarehousingLogisticsPage = () => {
  // scroll-reveal animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(
      ".iwl-reveal-left, .iwl-reveal-right, .iwl-reveal-up"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.intersectionRatio >= 0.3) {
            el.classList.add("is-visible");
          } else {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: [0, 0.3, 0.7] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="iwl-page">
      {/* TOP BLOCK --------------------------------------------------- */}
      <section className="iwl-section iwl-intro">
        <header className="iwl-header iwl-reveal-up">
          <h1 className="iwl-title">Warehousing &amp; logistics</h1>
          <div className="iwl-title-underline" />
        </header>

        <div className="iwl-two-col">
          {/* left image */}
          <div className="iwl-media iwl-reveal-left">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/warehousing.jpg"
              alt="Central warehouse racks and forklift"
            />
          </div>

          {/* right text card */}
          <div className="iwl-copy iwl-reveal-right">
            <p>
              Warehousing is at the core of our supply-chain management. A
              central warehouse at Vadodara, supported by multiple
              strategically located warehouses across India, allows us to hold
              stock close to customers and respond quickly to market demand.
            </p>
            <p>
              We also leverage the global warehousing and supply-chain
              capabilities of our subsidiary NRF to deliver Banco products
              efficiently to locations across Europe and the USA.
            </p>
            <p>
              Packaging formats are tailored to end use—whether parts are sent
              to an OEM source warehouse, a distributor, or an auto-parts
              retailer. For aftermarket business, we pay special attention to
              the aesthetics and branding of packaging while ensuring robust
              protection and minimal handling.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND BLOCK ------------------------------------------------ */}
      <section className="iwl-section iwl-bottom">
        <div className="iwl-two-col iwl-two-col--reverse">
          {/* text card first on desktop */}
          <div className="iwl-copy iwl-reveal-left">
            <p>
              A strong logistics backbone underpins our long-standing customer
              relationships and high satisfaction levels. Our warehouse
              locations enable just-in-time movement of products by road, rail
              or container shipping between distribution points.
            </p>
            <p>
              Local transport partners and responsive planning help us process
              urgent shipping requests quickly by locating inventory closest to
              the delivery point. This keeps transit times low and ensures a
              dependable supply experience for our customers.
            </p>
          </div>

          {/* image on the right */}
          <div className="iwl-media iwl-reveal-right">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/packaginglogist_ecs-img.jpg"
              alt="Team working on packing and logistics"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegratedWarehousingLogisticsPage;
