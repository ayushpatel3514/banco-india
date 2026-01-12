import React, { useEffect, useRef } from "react";
import "./AchievementsPage.css";

const ACHIEVEMENTS = [
  {
    year: 2017,
    color: "#f97316", // orange
    items: [
      {
        company: "Caterpillar",
        title: "SQEP Certificate Silver Level",
      },
    ],
  },
  {
    year: 2016,
    color: "#ec4899", // pink-red
    items: [
      {
        company: "Mahindra",
        title: "Appreciation for Participation and Contribution in Tech Know",
      },
      {
        company: "Caterpillar",
        title: "Appreciation for Achieving Business Objective",
      },
      {
        company: "Kirloskar Oil Engines Ltd.",
        title: "Appreciation for New Development",
      },
      {
        company: "Polcar",
        title: "Certificate of Appreciation for a Stable Partnership",
      },
    ],
  },
  {
    year: 2015,
    color: "#0ea5e9", // light blue
    items: [
      {
        company: "Mitsubishi Heavy Industries Limited",
        title: "Best Supplier Award",
      },
      {
        company: "Tractors and Farm Equipment Limited",
        title:
          "Best Supplier Award for Outstanding Contribution in Co-creating Value",
      },
      {
        company: "Kirloskar Oil Engines Ltd.",
        title: "Award for Response to Development",
      },
    ],
  },
  {
    year: 2014,
    color: "#1d4ed8", // deep blue
    items: [
      {
        company: "V.S.T. Tillers Tractors Limited",
        title: "Certificate of Recognition for Achieving the Target",
      },
    ],
  },
  {
    year: 2013,
    color: "#ef4444", // red
    items: [
      {
        company: "Cummins",
        title: "Award for Excellent ACE Support",
      },
      {
        company: "Mahindra",
        title: "Annual Commodity Award",
      },
      {
        company: "Mahindra",
        title: "SPD Performance Award",
      },
      {
        company: "Tractors and Farm Equipment Limited",
        title:
          "Best Supplier Award for Outstanding Contribution in New Product Development",
      },
    ],
  },
  {
    year: 2012,
    color: "#fb923c", // amber
    items: [
      {
        company: "Mahindra",
        title: "Best Quality Performance Award (Farm Division)",
      },
      {
        company: "Tractors and Farm Equipment Limited",
        title:
          "Best Supplier Award for Outstanding Contribution in New Product Development",
      },
    ],
  },
  {
    year: 2011,
    color: "#22c55e", // green
    items: [
      {
        company: "Certificate of Participation",
        title:
          "Certificate of Participation for Progress in Gujarat State Level 22nd Annual Convention on Quality Concepts",
      },
    ],
  },
  {
    year: 2010,
    color: "#6366f1", // indigo
    items: [
      {
        company: "Tractors and Farm Equipment Limited",
        title:
          "Best Supplier Award for Outstanding Contribution in New Product Development",
      },
      {
        company: "Atlas Copco",
        title: "Award for Supporting Sustainable Productivity",
      },
    ],
  },
];

const AchievementsPage = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".js-achievement");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: [0.0, 0.15] }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="achievements-page">
      <div className="achievements-inner">
        {/* HEADER */}
        <header className="achievements-header">
          <div className="section-title-wrap">
            <h1 className="achievements-heading">Achievements</h1>
            <div className="company-underline" />
          </div>

          <p className="achievements-intro">
            Over more than 5 decades, Banco is into perusing excellence and
            delivering foremost engine cooling and sealing products as well as
            solutions to clients across the world. We are the trendsetters of
            innovative solutions with a comprehensive range of products making
            us the first choice globally. The company has come a long way
            achieving several milestones and has received several accolades.
          </p>

          <p className="achievements-subintro">
            <strong>Following are the achievements that set Banco apart:</strong>
          </p>
        </header>

        {/* TIMELINE */}
        <section className="achievements-timeline" ref={timelineRef}>
          {ACHIEVEMENTS.map((block, index) => (
            <article
              key={block.year}
              className={`achievement-node js-achievement ${
                index % 2 === 0
                  ? "achievement-node--left"
                  : "achievement-node--right"
              }`}
              style={{ "--accent": block.color }}
            >
              <div
                className="achievement-year-badge"
                style={{ backgroundColor: block.color }}
              >
                <span className="achievement-year">{block.year}</span>
              </div>

              <div className="achievement-card">
                <div className="achievement-card-inner">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="achievement-item">
                      <h3 className="achievement-company">{item.company}</h3>
                      <p className="achievement-title">{item.title}</p>
                      {item.description && (
                        <p className="achievement-description">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default AchievementsPage;
