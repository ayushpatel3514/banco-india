import React, { useState, useEffect, useRef } from "react";
import "./HoverNav.css";

/**
 * NAV CONFIG
 * (no "Home" – logo click goes to "/")
 */
const NAV = [
  {
    label: "Company",
    links: [
      { label: "About us", to: "/company" },
      { label: "Certifications", to: "/company/certifications" },
      { label: "Achievements", to: "/company/achievements" },
      { label: "Clients", to: "/company/clients" },
    ],
  },

  {
    label: "Bespoke Engineering",
    links: [
      {
        label: "Engine cooling system",
        to: "/bespoke-engineering/engine-cooling",
      },
      {
        label: "Engine sealing system",
        to: "/bespoke-engineering/engine-sealing",
      },
    ],
  },

  {
    label: "Products",
    links: [
      { label: "Engine cooling system", to: "/products/engine-cooling" },
      { label: "Engine sealing system", to: "/products/engine-sealing" },
    ],
  },

  {
    label: "Integrated Manufacturing",
    links: [
      { label: "Engine cooling system", to: "/integrated/engine-cooling" },
      { label: "Engine sealing system", to: "/integrated/engine-sealing" },
      {
        label: "Warehousing & logistics",
        to: "/integrated/warehousing-logistics",
      },
    ],
  },

  {
    label: "Applications",
    links: [{ label: "All applications", to: "/applications" }],
  },

  {
    label: "People",
    links: [
      { label: "Our team", to: "/people/our-team" },
      { label: "Careers", to: "/people/careers" },
    ],
  },

  // ⬇️ New top-level item (no dropdown)
  {
    label: "Investor Relations",
    to: "/investor-relations",
  },
];

const HoverNav = ({ logo = "/bancologo.png" }) => {
  const [openIdx, setOpenIdx] = useState(null);
  const [navVisible, setNavVisible] = useState(true);

  const lastScrollYRef = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const closeTimerRef = useRef(null);

  // hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const goingUp = current < lastScrollYRef.current;

      if (goingUp) {
        setNavVisible(true);
      } else if (current > 80) {
        setNavVisible(false);
      }

      lastScrollYRef.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleEnter = (idx) => {
    clearCloseTimer();
    setOpenIdx(idx);
  };

  const handleLeave = (idx) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenIdx((current) => (current === idx ? null : current));
      closeTimerRef.current = null;
    }, 500);
  };

  const closeAll = () => {
    clearCloseTimer();
    setOpenIdx(null);
  };

  const handleNavClick = () => {
    closeAll();
  };

  const headerClasses = [
    "site-header",
    navVisible ? "show" : "hide",
    openIdx !== null ? "dropdown-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div
        className={`nav-backdrop ${openIdx !== null ? "is-visible" : ""}`}
        onClick={closeAll}
      />

      <header className={headerClasses}>
        <div className="nav-wrap">
          {/* logo → Home */}
          <a href="/" className="brand" onClick={handleNavClick}>
            <img src={logo} alt="Banco" />
          </a>

          {/* menus on the right */}
          <nav className="desktop-nav">
            {NAV.map((item, i) => {
              const hasDropdown =
                Array.isArray(item.links) && item.links.length > 0;

              // simple top-level link (Investor Relations)
              if (!hasDropdown && item.to) {
                return (
                  <a
                    key={item.label}
                    href={item.to}
                    className="nav-btn nav-simple-link"
                    onClick={handleNavClick}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              }

              // dropdown item
              return (
                <div
                  key={item.label}
                  className={`nav-item ${openIdx === i ? "is-open" : ""}`}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <button
                    className="nav-btn"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openIdx === i}
                  >
                    <span>{item.label}</span>
                  </button>

                  <div className="dropdown" role="menu">
                    {item.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.to}
                        className="drop-link"
                        onClick={handleNavClick}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="nav-cta">
            <a
              href="/contact"
              className="btn-primary"
              onClick={handleNavClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default HoverNav;
