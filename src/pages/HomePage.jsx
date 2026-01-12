import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";

// ---------------- DATA ----------------

const PRODUCT_TILES = {
  cooling: [
    {
      id: "radiators",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product1.png",
      url: "/products/radiators",
      title: "Radiators",
    },
    {
      id: "oil-coolers",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product2.png",
      url: "/products/oil-coolers",
      title: "Oil coolers",
    },
    {
      id: "engine-cooling-assemblies",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product3.png",
      url: "/products/engine-cooling-assemblies",
      title: "Engine cooling assemblies",
    },
    {
      id: "charged-air-coolers",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product4.png",
      url: "/products/charged-air-coolers",
      title: "Charged air coolers",
    },
  ],

  // placeholder sealing products
  sealing: [
    {
      id: "head-gaskets",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product1.png",
      url: "/products/head-gaskets",
      title: "Head gaskets",
    },
    {
      id: "exhaust-gaskets",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product2.png",
      url: "/products/exhaust-gaskets",
      title: "Exhaust gaskets",
    },
    {
      id: "heat-shields",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product3.png",
      url: "/products/heat-shields",
      title: "Heat shields",
    },
    {
      id: "custom-sealing",
      img: "https://www.bancoindia.com/wp-content/uploads/2017/06/product4.png",
      url: "/products/custom-sealing",
      title: "Custom sealing solutions",
    },
  ],
};

const CARD_DATA = [
  {
    title: "Windmills",
    body:
      "Cooling and sealing solutions that help wind turbines operate efficiently and extend their service life.",
    cta: "Know more",
  },
  {
    title: "Motorcycles",
    body:
      "High-grade modules designed for motorcycles across a wide range of capacities and riding styles.",
    cta: "Know more",
  },
  {
    title: "Forestry equipment",
    body:
      "Compact, non-clogging modules engineered for demanding forestry and logging equipment applications.",
    cta: "Know more",
  },
  {
    title: "Compressors",
    body:
      "Plate & Bar based cooling packages tailored for heavy-duty industrial compressor ranges.",
    cta: "Know more",
  },
];

// 29 client logos from brandlogo01 → brandlogo29
const CLIENT_LOGOS = Array.from({ length: 29 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `https://www.bancoindia.com/wp-content/uploads/2017/06/brandlogo${num}.jpg`,
    alt: `Client logo ${i + 1}`,
  };
});

// ---------------- COMPONENT ----------------

const HomePage = () => {
  const heroRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);

  const [showVideo, setShowVideo] = useState(false);
  const [activeSystem, setActiveSystem] = useState("cooling"); // "cooling" | "sealing"

  useEffect(() => {
    const heroEl = heroRef.current;
    const cardsSectionEl = cardsSectionRef.current;
    const aboutEl = aboutRef.current;
    const productsEl = productsRef.current;
    const clientsEl = clientsRef.current;

    if (!heroEl || !cardsSectionEl || !aboutEl || !productsEl || !clientsEl)
      return;

    const heroKicker = heroEl.querySelector(".hero-kicker");
    const heroTitleLines = heroEl.querySelectorAll(".hero-line");
    const heroBody = heroEl.querySelector(".hero-body");
    const heroButtons = heroEl.querySelector(".hero-actions");

    heroTitleLines.forEach((l) => l.classList.add("js-hero-animate"));
    if (heroKicker) heroKicker.classList.add("js-hero-animate");
    if (heroBody) heroBody.classList.add("js-hero-animate");
    if (heroButtons) heroButtons.classList.add("js-hero-animate");

    const cardEls = cardsSectionEl.querySelectorAll(".js-card");
    const featureTextEls = cardsSectionEl.querySelectorAll(".js-feature-text");

    const aboutLeft = aboutEl.querySelector(".aboutus-left");
    const aboutRight = aboutEl.querySelector(".aboutus-right");

    const productsTitle = productsEl.querySelector(".products-title");
    const productsSubtitle = productsEl.querySelector(".products-subtitle");
    const productTiles = productsEl.querySelectorAll(".product-tile");

    const clientsTitle = clientsEl.querySelector(".clients-title");
    const clientsSubtitle = clientsEl.querySelector(".clients-subtitle");
    const clientsLoop = clientsEl.querySelector(".clients-loop");

    const setFeatureTextVisible = (visible) => {
      featureTextEls.forEach((el) => {
        if (visible) el.classList.add("is-visible");
        else el.classList.remove("is-visible");
      });
    };

    const showHero = (visible) => {
      const els = [heroKicker, ...heroTitleLines, heroBody, heroButtons].filter(
        Boolean
      );
      els.forEach((el) => {
        if (visible) el.classList.add("is-visible");
        else el.classList.remove("is-visible");
      });
    };

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          showHero(entry.isIntersecting && entry.intersectionRatio > 0.3);
        });
      },
      { threshold: [0.0, 0.3] }
    );

    const setCardsVisible = (visible) => {
      cardEls.forEach((card) => {
        if (visible) card.classList.add("is-visible");
        else card.classList.remove("is-visible");
      });
    };

    const setAboutVisible = (visible) => {
      if (aboutLeft) {
        visible
          ? aboutLeft.classList.add("is-visible")
          : aboutLeft.classList.remove("is-visible");
      }
      if (aboutRight) {
        visible
          ? aboutRight.classList.add("is-visible")
          : aboutRight.classList.remove("is-visible");
      }
    };

    const setProductsVisible = (visible) => {
      if (!productsTitle || !productsSubtitle) return;
      const method = visible ? "add" : "remove";
      productsTitle.classList[method]("is-visible");
      productsSubtitle.classList[method]("is-visible");
      productTiles.forEach((tile) => tile.classList[method]("is-visible"));
    };

    const setClientsVisible = (visible) => {
      if (!clientsTitle || !clientsSubtitle || !clientsLoop) return;
      const method = visible ? "add" : "remove";
      clientsTitle.classList[method]("is-visible");
      clientsSubtitle.classList[method]("is-visible");
      clientsLoop.classList[method]("is-visible");
    };

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting && entry.intersectionRatio > 0.3;
          setCardsVisible(inView);
          setFeatureTextVisible(inView);
        });
      },
      { threshold: [0.0, 0.3] }
    );

    const aboutObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          setAboutVisible(
            entry.isIntersecting && entry.intersectionRatio > 0.3
          )
        ),
      { threshold: [0.0, 0.3] }
    );

    const productsObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          setProductsVisible(
            entry.isIntersecting && entry.intersectionRatio > 0.3
          )
        ),
      { threshold: [0.0, 0.3] }
    );

    const clientsObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          setClientsVisible(
            entry.isIntersecting && entry.intersectionRatio > 0.2
          )
        ),
      { threshold: [0.0, 0.2] }
    );

    heroObserver.observe(heroEl);
    cardsObserver.observe(cardsSectionEl);
    aboutObserver.observe(aboutEl);
    productsObserver.observe(productsEl);
    clientsObserver.observe(clientsEl);

    return () => {
      heroObserver.disconnect();
      cardsObserver.disconnect();
      aboutObserver.disconnect();
      productsObserver.disconnect();
      clientsObserver.disconnect();
    };
  }, []);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <video
          className="hero-video-bg"
          src="/home.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-video-overlay" />

        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-kicker js-hero-animate">
              Delivering excellence for more than 5 decades
            </p>

            <h1 className="hero-title">
              <span className="hero-line js-hero-animate">Passion</span>
              <span className="hero-line js-hero-animate">
                for performance
              </span>
            </h1>

            <p className="hero-body js-hero-animate">
              Banco Products (India) Ltd. engineers advanced engine cooling and
              sealing systems for automotive and industrial applications
              worldwide.
            </p>

            <div className="hero-actions js-hero-animate">
              <a href="/products" className="hero-btn hero-btn-primary">
                Explore Products
              </a>
              <a href="/contact" className="hero-btn hero-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="feature-section" ref={cardsSectionRef}>
        <div className="feature-header">
          <div className="section-title-wrap">
            <h2 className="feature-heading js-feature-text">Applications</h2>
            <div className="company-underline js-feature-text" />
          </div>
        </div>

        <div className="feature-grid">
          {CARD_DATA.map((card, idx) => (
            <article
              key={card.title}
              className={`feature-card js-card js-card-${idx + 1}`}
            >
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-body">{card.body}</p>
              <button className="feature-cta" type="button">
                {card.cta}{" "}
                <span aria-hidden="true" className="feature-cta-arrow">
                  ↗
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="aboutus-section" ref={aboutRef}>
        <div className="aboutus-inner">
          <div className="aboutus-left">
            <div
              className="aboutus-logo-block"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="/bancologo.png"
                alt="Banco logo"
                className="aboutus-logo-img"
              />

              <button
                type="button"
                className="aboutus-play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(true);
                }}
              >
                <span className="aboutus-play-icon">▶</span>
              </button>

              <button
                type="button"
                className="aboutus-video-tag"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(true);
                }}
              >
                <span className="aboutus-video-icon">⬤</span>
                <span className="aboutus-video-text">VIDEO</span>
              </button>
            </div>
          </div>

          <div className="aboutus-right">
            <div className="section-title-wrap">
              <h2 className="aboutus-heading">About us</h2>
              <div className="company-underline" />
            </div>

            <p className="aboutus-body">
              Born of entrepreneurial spirit in 1961, Banco Products (India)
              Ltd. has today carved a niche for itself as a leader in engine
              cooling and sealing systems.
            </p>

            <p className="aboutus-body">
              Our portfolio includes cooling systems, gaskets, and heat
              shields, serving OEMs and the replacement market across the
              globe.
            </p>

            <a href="/company" className="aboutus-readmore">
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" ref={productsRef}>
        <div className="products-inner">
          <div className="section-title-wrap">
            <h2 className="products-title">Our products</h2>
            <div className="company-underline" />
          </div>

          <p className="products-subtitle">
            <span>Engine cooling system</span>
            <span>|</span>
            <span>Engine sealing system</span>
          </p>

          <div className="products-tabs">
            <button
              type="button"
              className={`products-tab ${
                activeSystem === "cooling" ? "products-tab--active" : ""
              }`}
              onClick={() => setActiveSystem("cooling")}
            >
              Engine cooling system
            </button>
            <button
              type="button"
              className={`products-tab ${
                activeSystem === "sealing" ? "products-tab--active" : ""
              }`}
              onClick={() => setActiveSystem("sealing")}
            >
              Engine sealing system
            </button>
          </div>

          <div className="products-grid">
            {PRODUCT_TILES[activeSystem].map((tile) => (
              <a key={tile.id} href={tile.url} className="product-tile">
                <header className="product-tile-header">
                  <h3 className="product-tile-title">{tile.title}</h3>
                </header>

                <div className="product-tile-image-wrap">
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className="product-tile-image"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section" ref={clientsRef}>
        <div className="clients-container">
          <div className="section-title-wrap">
            <h2 className="clients-title">Our clients</h2>
            <div className="company-underline" />
          </div>

          <p className="clients-subtitle">
            Trusted by leading OEMs and partners across global markets.
          </p>

          <div className="clients-loop clients-cloud">
            {CLIENT_LOGOS.map((logo, index) => (
              <div
                key={logo.src}
                className={`clients-logo-item clients-logo-item--${
                  (index % 6) + 1
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="clients-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setShowVideo(false)}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-close-btn"
              type="button"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/5uEc8LyC_GQ?autoplay=1&rel=0"
              title="Banco Products Video"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
