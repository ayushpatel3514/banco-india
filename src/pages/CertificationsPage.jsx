import React, { useState } from "react";
import "./CertificationsPage.css";

/* -------------------------------------------------------------
   DATA
------------------------------------------------------------- */

const INFO_CARDS = [
  {
    id: "quality",
    title: "Quality management system",
    body:
      "Banco is committed to providing the highest quality products. " +
      "Our plants are certified according to internationally recognised " +
      "quality standards including IATF 16949:2016 and ISO 9001:2015.",
    standards: ["IATF 16949:2016", "ISO 9001:2015"],
  },
  {
    id: "environment",
    title: "Environmental management system",
    body:
      "As a responsible corporate, Banco continuously strives to protect " +
      "the environment and improve environmental performance. We comply " +
      "with all applicable laws, regulations and environmentally oriented " +
      "requirements while continually improving our systems.",
    standards: ["ISO 14001:2004"],
  },
];

const CERTIFICATES = [
  {
    id: "iso-14001-2015",
    standard: "ISO 14001:2015",
    category: "Environmental management system",
    locations: [
      "Banco Products (India) Limited – Bhaili",
      "Banco Products (India) Limited – SEZ (Waghodia)",
      "Banco Gaskets (India) Limited – Ankhi",
    ],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/1-2.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/2-2.jpg",
    ],
  },
  {
    id: "iso-9001-2015-bhaili",
    standard: "ISO 9001:2015",
    category: "Quality management system",
    locations: ["Banco Products (India) Limited – Bhaili"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/2.-ISO-9001-2015_BPIL_page_1.jpeg",
    ],
  },
  {
    id: "iso-9001-2015-sez",
    standard: "ISO 9001:2015",
    category: "Quality management system",
    locations: ["Banco Products (India) Limited - SEZ (Waghodia)"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/3.-ISO-9001-2015_BPIL_SEZ_page_1.jpeg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/3.-ISO-9001-2015_BPIL_SEZ_page_2.jpeg",
    ],
  },
  {
    id: "iso-9001-2015-zaheerabad",
    standard: "ISO 9001:2015",
    category: "Quality management system",
    locations: ["Banco Products (India) Limited – Zaheerabad"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/4.-ISO-9001-2015_BPIL_ZAHEERABAD_page_1.jpeg",
    ],
  },
  {
    id: "iatf-16949-2016-bhaili",
    standard: "IATF 16949:2016",
    category: "Quality management system",
    locations: ["Banco Products (India) Limited - Bhaili"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/IATF-16949-2016_BPIL-724x1024.jpg",
    ],
  },
  {
    id: "iso-45001-2018-multi",
    standard: "ISO 45001:2018",
    category: "Occupational health & safety",
    locations: [
      "Banco Products (India) Limited - Bhaili",
      "Banco Products (India) Limited - SEZ (Waghodia)",
      "Banco New Energy Cooling Systems Limited– Ankhi",
    ],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-45001-2018-_BPIL_BHAILI_SEZ_BNCL_01.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-45001-2018-_BPIL_BHAILI_SEZ_BNCL_02.jpg",
    ],
  },
  {
    id: "iso-45001-2018-bgil",
    standard: "ISO 45001:2018",
    category: "Occupational health & safety",
    locations: ["Banco Gaskets (India) Limited – Ankhi"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-45001-2018-BGIL-791x1024.jpg",
    ],
  },
  {
    id: "iatf-16949-2016-bgil",
    standard: "IATF 16949:2016",
    category: "Quality management system",
    locations: ["Banco Gaskets (India) Limited – Ankhi"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/IATF-1649-2016_BGIL_1.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/IATF-1649-2016_BGIL_2.jpg",
    ],
  },
  {
    id: "iso-9001-2015-bncl-nabcb",
    standard: "ISO 9001:2015 (Accredited by NABCB)",
    category: "Quality management system",
    locations: ["Banco New Energy Cooling Systems Limited– Ankhi"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-9001-2015_BNCL_NABCB_1.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-9001-2015_BNCL_NABCB_2.jpg",
    ],
  },
  {
    id: "iso-9001-2015-bncl-anab",
    standard: "ISO 9001:2015 (Accredited by ANAB)",
    category: "Quality management system",
    locations: ["Banco New Energy Cooling Systems Limited– Ankhi"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-9001-2015_BNCL_ANAB_1.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/ISO-9001-2015_BNCL_ANAB_2.jpg",
    ],
  },
  {
    id: "en-15085",
    standard: "EN 15085",
    category: "Welding of railway vehicles and components",
    locations: ["Banco Products (India) Limited"],
    pages: [
      "https://www.bancoindia.com/wp-content/uploads/2017/06/EN-15085_BPIL-1-724x1024.jpg",
      "https://www.bancoindia.com/wp-content/uploads/2017/06/EN-15085_BPIL-2-724x1024.jpg",
    ],
  },
];

/* -------------------------------------------------------------
   COMPONENT
------------------------------------------------------------- */

const CertificationsPage = () => {
  const [activeCert, setActiveCert] = useState(null); // certificate object or null
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = (cert) => {
    setActiveCert(cert);
    setActivePageIndex(0);
    setIsExpanded(false);
  };

  const closeModal = () => {
    setActiveCert(null);
    setActivePageIndex(0);
    setIsExpanded(false);
  };

  const goPrevPage = () => {
    if (!activeCert) return;
    setActivePageIndex((idx) =>
      idx > 0 ? idx - 1 : activeCert.pages.length - 1
    );
  };

  const goNextPage = () => {
    if (!activeCert) return;
    setActivePageIndex((idx) =>
      idx < activeCert.pages.length - 1 ? idx + 1 : 0
    );
  };

  const toggleExpand = () => {
    setIsExpanded((v) => !v);
  };

  return (
    <section className="cert-page">
      <div className="cert-page-inner">
        {/* HEADER */}
        <header className="cert-page-header">
          <div className="section-title-wrap">
            <h1 className="cert-heading">Certifications</h1>
            <div className="company-underline" />
          </div>

          <p className="cert-intro">
            Our certifications underline our commitment to performance, safety
            and sustainability across all our locations.
          </p>
        </header>

        {/* INFO CARDS (QUALITY / ENVIRONMENT) */}
        <section className="cert-info-row">
          {INFO_CARDS.map((card) => (
            <article key={card.id} className="cert-info-card">
              <h2 className="cert-info-title">{card.title}</h2>
              <p className="cert-info-body">{card.body}</p>
              <p className="cert-info-standards">
                {card.standards.join(" • ")}
              </p>
            </article>
          ))}
        </section>

        {/* CERTIFICATE GRID */}
        <section className="cert-grid-section">
          <div className="cert-grid">
            {CERTIFICATES.map((cert) => {
              const isMulti = cert.pages.length > 1;
              return (
                <article
                  key={cert.id}
                  className={
                    "cert-card" + (isMulti ? " cert-card--multi" : "")
                  }
                  onClick={() => openModal(cert)}
                >
                  <div className="cert-card-tag-row">
                    <span className="cert-card-standard-pill">
                      {cert.standard}
                    </span>
                    {isMulti && (
                      <span className="cert-card-pages-pill">
                        {cert.pages.length} pages
                      </span>
                    )}
                  </div>

                  <div className="cert-card-image-wrap">
                    <div className="cert-card-image-inner">
                      <img
                        src={cert.pages[0]}
                        alt={cert.standard}
                        className="cert-card-image"
                      />
                    </div>
                  </div>

                  <div className="cert-card-body">
                    <p className="cert-card-title">{cert.category}</p>
                    <div className="cert-card-locations">
                      {cert.locations.map((loc) => (
                        <div
                          key={loc}
                          className="cert-card-location-line"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* LIGHTBOX MODAL – ONLY CERTIFICATE IMAGE */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div
            className={
              "cert-modal-lightbox" +
              (isExpanded ? " cert-modal-lightbox--expanded" : "")
            }
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button (bottom-right in screenshot) */}
            <button
              type="button"
              className="cert-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Expand / shrink button (top-left like site) */}
            <button
              type="button"
              className="cert-modal-expand"
              onClick={toggleExpand}
              aria-label={isExpanded ? "Shrink image" : "Expand image"}
              title={isExpanded ? "Shrink the image" : "Expand the image"}
            >
              ⤢
            </button>

            <div className="cert-modal-image-wrap">
              <img
                src={activeCert.pages[activePageIndex]}
                alt={`${activeCert.standard} – page ${activePageIndex + 1}`}
                className="cert-modal-image"
              />
            </div>

            {activeCert.pages.length > 1 && (
              <div className="cert-modal-page-controls">
                <button
                  type="button"
                  onClick={goPrevPage}
                  className="cert-page-nav-btn"
                  aria-label="Previous page"
                >
                  ‹
                </button>
                <span className="cert-page-indicator">
                  Page {activePageIndex + 1} / {activeCert.pages.length}
                </span>
                <button
                  type="button"
                  onClick={goNextPage}
                  className="cert-page-nav-btn"
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsPage;
