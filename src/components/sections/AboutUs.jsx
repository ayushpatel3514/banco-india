// src/components/sections/AboutUs.jsx
import React, { useEffect, useRef } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutus-section" id="about">
      <div className="aboutus-wrapper">
        {/* LEFT: LOGO CARD ONLY */}
        <div ref={leftRef} className="aboutus-left">
          <div className="aboutus-logo-frame">
            {/* image should be in public/bancologo.png */}
            <img
              src="/bancologo.png"
              alt="Banco Products (India) Ltd."
              className="aboutus-logo"
            />
          </div>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div ref={rightRef} className="aboutus-right">
          <h2 className="aboutus-title">About us</h2>

          <div className="aboutus-line">
            <span className="black-line" />
            <span className="green-line" />
          </div>

          <p className="aboutus-desc">
            Born of entrepreneurial spirit in 1961, Banco Products (India) Ltd.
            has today carved a niche for itself as a leader in the business of
            engine cooling and sealing systems both for automotive and
            industrial applications. We combine the power of innovation and
            commitment to quality to create high-performance solutions for our
            customers.
          </p>

          <p className="aboutus-subtitle">
            Our portfolio of business includes –
          </p>
          <ul className="aboutus-list">
            <li>Engine cooling systems</li>
            <li>Gaskets and heat shields</li>
          </ul>

          <button className="aboutus-btn" type="button">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
