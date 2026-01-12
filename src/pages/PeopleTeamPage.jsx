// src/pages/PeopleTeamPage.jsx
import React, { useEffect } from "react";
import "./CompanyPage.css"; // reuse the same styles as Company page

// Same data + image paths used in CompanyPage "We are BANCO" section
const weAreBanco = [
  {
    title: "The Banco DNA",
    body:
      "The company’s management and all its employees are united by shared values. These values stand for what drives us forward and what forms the basis of our actions, engagement, and commitment to all our stakeholders.",
    image: "/a.png",
    imageFirst: true,
  },
  {
    title: "Innovation",
    body:
      "Our creativity, our constant search to find new solutions to our customers’ needs drives our actions. A thorough understanding of customers’ requirements helps us to tailor our products and offer customised solutions.",
    image: "/b.png",
    imageFirst: false,
  },
  {
    title: "Passion for performance",
    body:
      "With an eye on top performance, we try hard, we overcome adversities and never let up in our excellence endeavours. Whether it is about meeting high-quality standards or about delivery expectations, we give our best.",
    image: "/c.png",
    imageFirst: true,
  },
  {
    title: "Team spirit",
    body:
      "For us at Banco, teamwork means everything as we stand united, rely on each other and complement each other’s efforts with a single-minded purpose of bringing success for Banco, customers and all stakeholders.",
    image: "/d.png",
    imageFirst: false,
  },
];

const PeopleTeamPage = () => {
  // same left/right reveal animation behaviour as on CompanyPage
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
      { threshold: [0, 0.35, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // scroll to top when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="company-page">
      {/* reuse the same section styling */}
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

export default PeopleTeamPage;
