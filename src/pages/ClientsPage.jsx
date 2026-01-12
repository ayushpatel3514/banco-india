// src/pages/ClientsPage.jsx
import React, { useEffect, useRef } from "react";
import "./ClientsPage.css";

const CLIENT_LOGOS = Array.from({ length: 29 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    id: index + 1,
    url: `https://www.bancoindia.com/wp-content/uploads/2017/06/brandlogo${num}.jpg`,
  };
});

const ClientsPage = () => {
  const gridRef = useRef(null);

  // simple fade-in on scroll (optional)
  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".js-client-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="clients-page">
      <div className="clients-inner">
        {/* HEADER */}
        <header className="clients-header">
          <div className="section-title-wrap">
            <h1 className="clients-heading">Clients</h1>
            {/* uses existing animated underline styles */}
            <div className="company-underline" />
          </div>

          <p className="clients-intro">
            Over the years, <strong>BANCO</strong> has earned the trust of leading OEMs
            and brands across automotive, off-highway, rail and industrial
            segments. A selection of our esteemed clients is showcased below.
          </p>
        </header>

        {/* LOGO GRID */}
        <section
          className="clients-grid"
          ref={gridRef}
          aria-label="BANCO client logos"
        >
          {CLIENT_LOGOS.map(logo => (
            <div
              key={logo.id}
              className="client-card js-client-card"
            >
              <img
                src={logo.url}
                alt={`Client logo ${logo.id}`}
                className="client-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ClientsPage;
