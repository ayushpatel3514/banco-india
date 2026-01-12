import React, { useEffect } from "react";
import "./IntegratedEngineCoolingPage.css"; // reuse the same imc-* styles

const IntegratedEngineSealingPage = () => {
  // same scroll-reveal behaviour as cooling page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(
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

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="imc-page">
      {/* INTRO --------------------------------------------------------- */}
      <section className="imc-section imc-intro">
        <div className="imc-header imc-reveal-up">
          <h1 className="imc-title">Engine sealing system</h1>
          <div className="imc-title-underline" />
        </div>

        <div className="imc-intro-body imc-reveal-up">
          <p>
            Banco Gasket India Ltd (BGIL) has an integrated manufacturing plant
            at Ankhi near Vadodara, equipped to produce millions of gaskets per
            year with consistent quality.
          </p>
          <p>
            The plant brings together jointing-sheet manufacturing, rubber
            compounding, MLS gasket production, laser welding, tool design and
            composite-gasket facilities under one roof. This enables an
            integrated approach to analysing and optimising engine heat
            management.
          </p>
        </div>

        {/* Advanced capabilities – two columns of bullets */}
        <div className="imc-capabilities imc-reveal-up">
          <h3 className="imc-cap-title">Advanced manufacturing capabilities include:</h3>
          <div className="imc-cap-grid">
            <ul className="imc-bullet-list">
              <li>Modular manufacturing set-up with reduced material movement.</li>
              <li>Jointing-sheet facility covering a wide range of products.</li>
              <li>Tandem lines designed for high-volume production.</li>
              <li>Automated coating lines for consistent surface finish.</li>
              <li>In-house tool design and manufacturing capability.</li>
              <li>
                Robust quality-assurance systems with high-end verification
                facilities.
              </li>
            </ul>
            <ul className="imc-bullet-list">
              <li>Wide range of modern equipment with controlled processes.</li>
              <li>Rubber compound manufacturing facility.</li>
              <li>Flexible lines for small volumes and fluctuating demand.</li>
              <li>High-quality screen-printing process for gaskets.</li>
              <li>State-of-the-art standard room.</li>
              <li>
                Single-location infrastructure that helps meet demanding delivery
                and quality schedules.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOCKS -------------------------------------------------------- */}
      <section className="imc-section imc-blocks">
        {/* Row 1 ------------------------------------------------------- */}
        <div className="imc-row">
          <div className="imc-text-panel imc-reveal-left">
            <h3 className="imc-block-title">
              Jointing sheet manufacturing facility
            </h3>
            <p>Banco’s capabilities include:</p>
            <ul className="imc-bullet-list">
              <li>In-house capability to manufacture jointing sheets.</li>
              <li>Development of a wide range of material grades.</li>
              <li>
                Use of high-quality raw materials sourced from reputed global
                suppliers.
              </li>
            </ul>
          </div>

          <div className="imc-media imc-reveal-right">
            <img
              src="/public/integratedsealing1.png"
              alt="Jointing sheet manufacturing facility"
            />
          </div>
        </div>

        {/* Row 2 ------------------------------------------------------- */}
        <div className="imc-row imc-row--reverse">
          <div className="imc-text-panel imc-reveal-right">
            <h3 className="imc-block-title">High precision gasket cutting</h3>
            <p>
              CNC steel-rule die cutting machines and computer-controlled knife
              cutters provide high accuracy in cutting soft and composite gasket
              materials. Optimised material utilisation reduces waste and
              improves cost efficiency for customers.
            </p>
          </div>

          <div className="imc-media imc-reveal-left">
            <img
              src="/public/integratedsealing2.png"
              alt="High precision gasket cutting"
            />
          </div>
        </div>

        {/* Row 3 ------------------------------------------------------- */}
        <div className="imc-row">
          <div className="imc-text-panel imc-reveal-left">
            <h3 className="imc-block-title">
              Rubber compound design and manufacturing
            </h3>
            <p>Banco offers:</p>
            <ul className="imc-bullet-list">
              <li>Customised compound design and development.</li>
              <li>Computer-controlled compounding and batch tracking.</li>
              <li>Stringent quality checks on every batch.</li>
              <li>Multi-cavity moulding for high volumes.</li>
              <li>
                Injection / compression moulding machines for a wide variety of
                parts.
              </li>
            </ul>
          </div>

          <div className="imc-media imc-reveal-right">
            <img
              src="/public/integratedsealing3.png"
              alt="Rubber compound design and manufacturing"
            />
          </div>
        </div>

        {/* Row 4 ------------------------------------------------------- */}
        <div className="imc-row imc-row--reverse">
          <div className="imc-text-panel imc-reveal-right">
            <h3 className="imc-block-title">MLS gasket plant</h3>
            <p>
              The high-precision multi-layer steel gasket plant includes multiple
              progressive lines and a tandem line, supported by laser welding
              for stopper plates in cylinder-head gaskets.
            </p>
          </div>

          <div className="imc-media imc-reveal-left">
            <img
              src="/public/integratedsealing4.png"
              alt="MLS gasket plant"
            />
          </div>
        </div>

        {/* Row 5 ------------------------------------------------------- */}
        <div className="imc-row">
          <div className="imc-text-panel imc-reveal-left">
            <h3 className="imc-block-title">Laser welding</h3>
            <p>
              Laser welding technology is used for integrating stoppers in MLS
              gaskets. It provides precise and repeatable welds while enabling
              optimised material use and complex geometry in the cylinder-bore
              area.
            </p>
          </div>

          <div className="imc-media imc-reveal-right">
            <img
              src="/public/integratedsealing5.png"
              alt="Laser welding of gasket components"
            />
          </div>
        </div>

        {/* Row 6 ------------------------------------------------------- */}
        <div className="imc-row imc-row--reverse">
          <div className="imc-text-panel imc-reveal-right">
            <h3 className="imc-block-title">
              In-house tool design and manufacturing
            </h3>
            <p>Our tool-room capabilities include:</p>
            <ul className="imc-bullet-list">
              <li>High-accuracy machining centres and VMCs.</li>
              <li>CNC wire-cut and turning facilities.</li>
              <li>EDM and spark-erosion machines.</li>
              <li>CAD / CAM support for complex tool design.</li>
            </ul>
          </div>

          <div className="imc-media imc-reveal-left">
            <img
              src="/public/integratedsealing6.png"
              alt="In-house tool room"
            />
          </div>
        </div>

        {/* Row 7 ------------------------------------------------------- */}
        <div className="imc-row">
          <div className="imc-text-panel imc-reveal-left">
            <h3 className="imc-block-title">Composite gasket plant</h3>
            <p>
              The composite gasket facility includes hydraulic presses and CNC
              cutting equipment. It can process non-metallic, semi-metallic and
              metallic gasket types suitable for low- and high-pressure as well
              as high-temperature applications.
            </p>
          </div>

          <div className="imc-media imc-reveal-right">
            <img
              src="/public/integratedsealing7.png"
              alt="Composite gasket plant"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegratedEngineSealingPage;
