// src/components/layout/SiteFooter.jsx
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./SiteFooter.css";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LINKS COLUMN */}
        <div className="footer-col footer-links">
          <h4 className="footer-subtitle">Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/company">Company</a>
            </li>
            <li>
              <a href="/bespoke-engineering">Bespoke engineering</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/integrated-manufacturing">Integrated manufacturing</a>
            </li>
            <li>
              <a href="/applications">Applications</a>
            </li>
            <li>
              <a href="/people">People</a>
            </li>
            <li>
              <a href="/media">Media</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/downloads">Downloads</a>
            </li>
            <li>
              <a href="/ecatalogue">E-catalogue</a>
            </li>
            <li>
              <a href="/investor-relations">Investor relations</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div className="footer-col footer-contact">
          <h4 className="footer-subtitle">Contact details</h4>
          <div className="footer-contact-block">
            <p>
              Banco Products (India) Ltd.
              <br />
              Bil, Near Bhaili Railway Station,
              <br />
              Padra Road, District Baroda – 391 410,
              <br />
              Gujarat, India.
            </p>
            <p>CIN: L51100GJ1961PLC001039</p>
            <p>+91-265-2680220 / 21 / 22 / 23</p>
            <p>+91-265-2318100</p>
            <p>+91-265-2680220</p>
            <p>
              Email:{" "}
              <a href="mailto:mail@bancoindia.com">
                mail@bancoindia.com
              </a>
            </p>
          </div>

          <div className="footer-follow">
            <h4 className="footer-subtitle">Follow us on</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* MESSAGE FORM */}
        <div className="footer-col footer-message">
          <h4 className="footer-subtitle">Leave us a message</h4>
          <form className="footer-form">
            <input
              type="text"
              placeholder="Your name"
              className="footer-input"
            />
            <input
              type="email"
              placeholder="Enter your email ID"
              className="footer-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="footer-input"
            />
            <textarea
              placeholder="Your message"
              className="footer-textarea"
              rows={4}
            />
            <button type="submit" className="footer-submit">
              <span className="footer-submit-label">Submit</span>
              <span className="footer-submit-glow" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <span>© {year} Banco Products (India) Ltd.</span>
        <span className="footer-bottom-dot" />
        <span>Our GST details: Banco Products</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
