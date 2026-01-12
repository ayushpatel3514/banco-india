// src/pages/EngineSealingPage.jsx
import React, { useEffect } from "react";
import "./EngineSealingPage.css";

const trendsBullets = [
  "Demand for tighter emission norms and readiness to comply with BSVI emission norms.",
  "Downsizing of engine construction.",
  "Lighter engines with aluminium construction.",
  "Reducing assembly torque by sealing with lower force.",
  "Advanced combustion modes involving very high combustion pressures.",
  "Growing usage of turbo-charged air aspiration and exhaust-gas heat recovery.",
  "Longer maintenance-free product life cycles.",
];

const simulationSteps = [
  "Assembly and bolt-load data analysis.",
  "Assessing fluid / media features versus material compatibility.",
  "Material, profile and thickness finalisation.",
  "Nesting for optimum material consumption.",
  "Checking conformance with Banco design guidelines.",
  "Comparing with reference designs from existing part library.",
];

const verificationBullets = [
  "Bead design optimisation using FEA software ABAQUS.",
  "Thermal and pressure analysis using ABAQUS.",
  "Study of elastomer behaviour using CSR test rig.",
  "Study of soft-gasket material based on load vs deflection curves.",
  "Cover-factor study for load distribution.",
  "Minimum-clearance study using ABAQUS.",
];

const rapidProtoBullets = [
  "ATOM knife-cutting machine.",
  "CHIESA steel-rule die-cutting machine.",
  "CNC steel-rule bending facility.",
  "Steel-die design and manufacturing support.",
  "Mould design and manufacturing support.",
  "Contour tracer & portable CMM for verification.",
  "Surface-coating and partial-coating setups.",
];

const staticTests = [
  "Minimum clearance – lead pellet test.",
  "FUJI film test for pressure distribution.",
  "P(max.) testing – nitrogen-sealing test.",
  "Hydraulic testing for media sealing.",
  "Air leak-rate testing.",
];

const dynamicTests = [
  "Deep thermal-shock test rig.",
  "Endurance-test rig.",
  "Go-stop test.",
  "Full-throttle run test.",
];

const EngineSealingPage = () => {
  // Scroll-triggered animations for this page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(
      ".ess-reveal-up, .ess-reveal-side"
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
    <div className="ess-page">
      {/* INTRO / HERO TEXT ------------------------------------------------ */}
      <section className="ess-section ess-intro">
        <div className="ess-header ess-reveal-up">
          <h1 className="ess-title">Engine sealing system</h1>
          <div className="ess-title-underline" />
        </div>

        <div className="ess-intro-body ess-reveal-up">
          <p>
            Gaskets are invisible yet one of the most critical components of an
            automotive engine system. In a highly dynamic environment they are
            exposed to extreme heat and combustion pressure. Cylinder-head
            lifting, deck distortion and rapid pressure pulses put enormous
            stress on every sealing joint.
          </p>
          <p>
            With more than five decades of experience, Banco engineers have
            mastered the science of engine sealing systems. No two applications
            are exactly the same, so our designers critically evaluate engine
            design, expected usage, mating-part configuration, bolt pattern and
            torque data for every programme.
          </p>
          <p>
            Banco’s DSIR-certified R&amp;D centre at Ankhi is equipped with
            advanced design-simulation and test capabilities. By leveraging
            multiple material and manufacturing options, our designers develop
            customised sealing solutions that deliver long life, high efficiency
            and reduced total cost of ownership.
          </p>
          <p>
            At Banco, bespoke engineering is our design philosophy – built on a
            deep understanding of every application need and a commitment to
            contemporary engineering solutions that meet or exceed customers’
            performance expectations.
          </p>
        </div>
      </section>

      {/* TRENDS IN AUTOMOTIVE INDUSTRY ----------------------------------- */}
      <section className="ess-section ess-trends">
        <div className="ess-section-heading ess-reveal-up">
          <h2 className="ess-kicker">Trends in Automotive Industry</h2>
        </div>

        <div className="ess-two-col">
          <div className="ess-media ess-reveal-side">
            <img
              src="/bespokesealing1.png"
              alt="Gasket layout for modern engine"
            />
          </div>

          <div className="ess-content ess-reveal-up">
            <p>
              The automotive industry is passing through a highly dynamic phase.
              Multi-modal mobility, rapid technology progress, climate-change
              regulations and globalisation are reshaping engine design.
            </p>
            <p>
              For the engineers at Banco’s gasket-design division, the following
              trends have a strong influence:
            </p>
            <ul className="ess-bullet-list">
              {trendsBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Meeting these demands is the nature of our work – they drive our
              research and design teams to continually create more efficient
              sealing systems.
            </p>
          </div>
        </div>
      </section>

      {/* CO-CREATING SOLUTIONS ------------------------------------------- */}
      <section className="ess-section ess-co-create">
        <div className="ess-section-heading ess-reveal-up">
          <h2 className="ess-kicker">
            Co-creating efficient engine sealing solutions
          </h2>
        </div>

        <div className="ess-two-col ess-two-col--reverse">
          <div className="ess-content ess-reveal-up">
            <p>
              Banco’s experienced research, design and engineering team works
              with customers from the very early stages of development. Our
              engineers spend extensive time understanding operating conditions,
              performance expectations and development gateways.
            </p>
            <h3 className="ess-subtitle">
              Preparing concepts using simulation tools
            </h3>
            <p className="ess-strong">
              Concept design development of the sealing system using simulation
              tools is a key step in our product-development process. Major
              steps include:
            </p>
            <ul className="ess-bullet-list">
              {simulationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Ever-growing trends of high power, efficiency, light-weighting,
              tighter emissions and long component life continuously challenge
              and motivate our teams to innovate.
            </p>
          </div>

          <div className="ess-media ess-reveal-side">
            <img
              src="/bespokesealing2.png"
              alt="Simulation of sealing concept"
            />
          </div>
        </div>
      </section>

      {/* SELECTING MATERIAL + DESIGN VERIFICATION + RAPID PROTO ---------- */}
      <section className="ess-section ess-material">
        <div className="ess-section-heading ess-reveal-up">
          <h2 className="ess-kicker">Selecting right sealing material</h2>
        </div>

        <div className="ess-two-col ess-two-col--material">
          <div className="ess-media ess-reveal-side">
            <img
              src="/bespokesealing3.png"
              alt="Contact pressure map for gasket"
            />
          </div>

          <div className="ess-content ess-reveal-up">
            <p>
              To design an effective sealing solution, Banco designers use
              advanced CAD / FEA tools and deep expertise in polymer science.
              They can choose from more than 25 grades of jointing materials,
              multiple surface-coating options and a wide range of customised
              rubber compounds.
            </p>

            <div className="ess-columns">
              <div className="ess-col">
                <h3 className="ess-subtitle">Design verification</h3>
                <p className="ess-strong">
                  Our designers use advanced digital-simulation tools for design
                  verification such as:
                </p>
                <ul className="ess-bullet-list">
                  {verificationBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ess-col ess-reveal-up">
                <h3 className="ess-subtitle">Rapid Proto typing</h3>
                <p>
                  To reduce time-to-market, Banco has established a dedicated
                  prototype manufacturing shop with facilities such as:
                </p>
                <ul className="ess-bullet-list">
                  {rapidProtoBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="ess-material-photo ess-reveal-side">
          <img
            src="/bespokesealing4.png"
            alt="Rapid prototype manufacturing"
          />
        </div>
      </section>

      {/* PRODUCT VALIDATION ---------------------------------------------- */}
      <section className="ess-section ess-validation">
        <div className="ess-two-col">
          <div className="ess-media ess-reveal-side">
            <img
              src="/bespokesealing5.png"
              alt="Engine assembly during validation"
            />
          </div>

          <div className="ess-content ess-reveal-up">
            <h2 className="ess-kicker">Product validation</h2>
            <p>
              Comprehensive test capabilities at our R&amp;D centre support
              reliable product validation for newly developed sealing products.
            </p>

            <div className="ess-validation-grid">
              <div>
                <h3 className="ess-subtitle">Static testing</h3>
                <ul className="ess-bullet-list">
                  {staticTests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="ess-subtitle">Dynamic testing</h3>
                <ul className="ess-bullet-list">
                  {dynamicTests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              Powerful R&amp;D capabilities, combined with our engineers’ vast
              application experience, ensure that Banco’s innovation process is
              robust and keeps delivering success stories for our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineSealingPage;
