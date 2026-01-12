// src/pages/IntegratedEngineCoolingPage.jsx
import React, { useEffect } from "react";
import "./IntegratedEngineCoolingPage.css";

/**
 * CONTENT BLOCKS
 */
const BLOCKS = [
  {
    title: "High-speed tube mills",
    text: [
      "Banco is equipped with high-speed tube mills which can produce both welded and non-welded tubes in a wide variety of sizes.",
      "Tightly controlled forming and welding processes, together with sophisticated measuring instruments, ensure production of high-quality tubes which meet stringent performance expectations of our customers.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/tubemill_ecs-img.jpg",
  },
  {
    title: "High-precision fin production",
    text: [
      "A wide range of fin designs together with high-precision fin manufacturing enables Banco to optimise heat-transfer performance and pressure-drop characteristics.",
      "Depending on application, fin geometry is selected to suit severe duty, corrosion resistance, fouling behaviour and packaging constraints.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/finforming_ecs-img.jpg",
  },
  {
    title: "Efficient core building modules",
    text: [
      "Banco has invested in technologically advanced semi-automatic core builders which take care of high-volume as well as low-volume requirements.",
      "The modular concept, combined with disciplined manufacturing practices, helps us produce a wide range of radiator and charge-air cooler cores for applications such as commercial vehicles, industrial tractors, industrial power generators, earth-moving and rail locomotives.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/coremaking_ecs-img.jpg",
  },
  {
    title: "State-of-the-art brazing furnace",
    text: [
      "Aluminium and copper-brass heat exchanger cores and assemblies are brazed in state-of-the-art controlled-atmosphere brazing furnaces.",
      "Precise temperature control and conveyor systems allow consistent brazing quality across a wide range of core sizes and tube / fin combinations.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/furnace_ecs-img.jpg",
  },
  {
    title: "Injection moulding & vibration welding",
    text: [
      "Banco’s plastics manufacturing facilities include modern injection-moulding machines and vibration-welding equipment.",
      "These capabilities help us produce robust plastic tanks, shrouds and other components that withstand demanding under-hood environments.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/injectionmoulding_ecs-img.jpg",
  },
  {
    title: "Fabrication & engineering shop",
    text: [
      "A dedicated fabrication and engineering shop is equipped with a wide range of power presses, brake presses and welding stations.",
      "This enables Banco to design and manufacture high-quality brackets, frames, structures and other fabricated parts used in heat-exchanger modules.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/assemblylines_ecs-img.jpg",
  },
  {
    title: "Modern assembly lines",
    text: [
      "As a leading supplier of bespoke engine-cooling systems, Banco offers a broad range of product variants for different duty cycles and equipment segments.",
      "Modern assembly lines with flexible fixtures, poka-yoke devices and in-line leak testing help ensure consistent quality and traceability for every module produced.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/2assembly-line.jpg",
  },
  {
    title: "Modern tool room",
    text: [
      "Banco’s modern tool room is equipped with a range of advanced equipment such as CNC machining centres, EDM and wire-cut machines.",
      "A fully documented tool-maintenance system and metrology support ensure high precision and long service life of tooling used in manufacturing.",
    ],
    img: "https://www.bancoindia.com/wp-content/uploads/2017/06/modern-tool-room.jpg",
  },
];

const IntegratedEngineCoolingPage = () => {
  // always go to top when this page loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, []);

  // scroll-reveal animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(
      ".imc-reveal-left, .imc-reveal-right, .imc-reveal-up"
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

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="imc-page">
      {/* HEADER / INTRO -------------------------------------------------- */}
      <section className="imc-section imc-intro">
        <div className="imc-header imc-reveal-up">
          <h1 className="imc-title">Engine cooling system</h1>
          {/* underline ONLY here, matches other pages */}
          <div className="imc-title-underline" />
        </div>

        <div className="imc-intro-body imc-reveal-up">
          <p>
            Over the past many years, Banco has been steadily investing in
            advanced manufacturing technologies for engine cooling systems.
            Plants are equipped to manufacture all critical processes and
            components in-house. This gives us a unique competitive advantage in
            meeting challenging duty cycles, packaging constraints and
            application-specific requirements.
          </p>
          <p>
            A controlled manufacturing process and use of robust quality-
            management systems ensure that every Banco product is made to the
            highest standards of quality and reliability.
          </p>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITIES ------------------------------------- */}
      <section className="imc-section imc-blocks">
        {BLOCKS.map((b, idx) => {
          const isReversed = idx % 2 === 1;

          const mediaClass = `imc-media ${
            isReversed ? "imc-reveal-right" : "imc-reveal-left"
          }`;

          const textClass = `imc-text-panel ${
            isReversed ? "imc-reveal-left" : "imc-reveal-right"
          }`;

          return (
            <div
              key={b.title}
              className={`imc-row ${isReversed ? "imc-row--reverse" : ""}`}
            >
              <div className={mediaClass}>
                <img src={b.img} alt={b.title} />
              </div>

              <div className={textClass}>
                <h2 className="imc-block-title">{b.title}</h2>
                {b.text.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default IntegratedEngineCoolingPage;
