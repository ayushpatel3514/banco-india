import React, { useEffect } from "react";
import "./EngineCoolingPage.css";

const automotiveBullets = [
  "Downsizing of heat exchanger thickness",
  "Lightweight heat exchanger to achieve CO₂ reduction",
  "Optimizing heat transfer",
  "Pressure drop reduction through heat exchangers to reduce fan power consumption",
  "Supporting new designs complying with BSVI norms",
  "Easy installation to reduce service cost",
];

const coCreateEarlyStage = [
  "Detailed understanding of customer requirements.",
  "Partnering with OEMs for efficient engine cooling solution development.",
  "Providing early inputs to customer.",
  "Front grill opening finalization along with customer.",
  "Evolution of an optimized solution.",
  "Banco design release gates in synchronization with customer.",
];

const coCreateTechnicalSteps = [
  "Concept design using 1D simulation tools.",
  "Engine heat rejection data finalization.",
  "Cooling air specification finalization.",
  "Fan design finalization.",
  "Component level simulation using MathCAD.",
  "Checking conformance to Banco design guidelines.",
  "System simulation using Kuli.",
];

const robustDesignPoints = [
  "Designing cooling system modules like radiators or charge-air coolers that fulfill customers’ high-performance expectations.",
  "Classical radiator designs offered in multiple rows and fin-density combinations to optimize system performance.",
  "Specialized high-dimpled tubes for copper/brass radiators with bar/plate designs and multiple fin options.",
  "Design guidelines that capture extensive application know-how and help define best-fit solutions.",
];

const verificationBullets = [
  "Fin design optimization using customized Computational Fluid Dynamics (CFD) software.",
  "Internal design and inside-flow optimization through CFD models.",
  "Pressure cycle simulation using CAE software ANSYS.",
  "Stress analysis of tube and header using CAE software ANSYS.",
  "FEA simulation for charge-air cooler thermal cycle induced load.",
];

const prototypingBullets = [
  "Dedicated prototype development shop for rapid concept validation.",
  "Advanced, flexible machinery for quick manufacturing of prototypes.",
  "Ability to adapt designs rapidly based on customer feedback.",
  "Support for continual evolution of new and better solutions.",
];

const validationLeft = [
  "Wind tunnel to carry out heat exchanger performance test.",
  "Vibration rig.",
  "Thermal cycle rig.",
  "Pressure cycle rig.",
  "Combined vibration rig + pressure cycle rig.",
  "Combined vibration rig + pressure cycle + thermal cycle rig.",
];

const validationRight = [
  "Burst pressure rig.",
  "Salt spray chamber.",
  "SWAAT chamber.",
  "Liquid nitrogen cold chamber.",
  "Internal corrosion test rig.",
  "Fan motor cowl testing.",
];

const windTunnelBullets = [
  "Air velocity and pressure.",
  "Air, water and oil temperature.",
  "Coolant flow rate.",
];

const EngineCoolingPage = () => {
  // Scroll-triggered animations (same behaviour as Company page)
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
      {
        threshold: [0, 0.35, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ecs-page">
      {/* TITLE BLOCK */}
      <section className="ecs-section ecs-header">
        <div className="ecs-header-inner reveal-left">
          <div className="ecs-title-wrap">
            <h1 className="ecs-title">Engine cooling system</h1>
            {/* underline only here, styled like Company page */}
            <div className="ecs-title-underline" />
          </div>

          <h2 className="ecs-subtitle">
            Bespoke engineering is the core design philosophy at Banco.
          </h2>

          <div className="ecs-intro-text">
            <p>
              Banco is built on a strong foundation of design and engineering
              excellence. We aim to meet our customers’ expectations to the
              fullest. By understanding real and practical needs and
              co-creating solutions, our experts work side-by-side with
              customers every day.
            </p>
            <p>
              We recognise that <strong>“one shoe can’t fit all”</strong>.
              Instead of over-emphasising standardisation, we develop solutions
              tailored to deliver maximum efficiency under practical operating
              conditions. Flexibility in design, prototyping speed, in-house
              testing and integrated manufacturing capabilities make Banco a
              preferred development partner.
            </p>
          </div>
        </div>
      </section>

      {/* AUTOMOTIVE TRENDS */}
      <section className="ecs-section ecs-panel">
        <div className="ecs-two-col ecs-panel-inner">
          <div className="ecs-media reveal-left">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/automotive-trends.jpg"
              alt="Automotive trends"
            />
          </div>

          <div className="ecs-content reveal-right">
            <h3 className="ecs-block-title">Automotive trends</h3>
            <p>
              In the automotive industry, technological changes happen at a
              rapid rate. While electric vehicles, shared mobility and
              autonomous driving are transforming the landscape, the efficiency
              of internal combustion engines remains a major area of focus for
              designers worldwide.
            </p>
            <p>
              Customers demand downsizing of engines, growing HVAC usage,
              increased use of turbocharged engines, lightweight components and
              higher thermal efficiency while controlling emissions.
            </p>

            <h4 className="ecs-inline-heading">
              At Banco, design is an “outside–in” process.
            </h4>
            <p>
              Our engineers spend significant time understanding customer
              requirements such as:
            </p>

            <ul className="ecs-bullet-list">
              {automotiveBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="ecs-conclusion">
              All of the above leads to an integrated approach to analysing and
              optimising engine heat management.
            </p>
          </div>
        </div>
      </section>

      {/* CO-CREATING SOLUTIONS – NO UNDERLINE HERE */}
      <section className="ecs-section ecs-co-create">
        <div className="ecs-section-header">
          <h2 className="ecs-kicker">
            Co-creating engine cooling solutions with our customers
          </h2>
          {/* underline intentionally removed here */}
        </div>

        <div className="ecs-two-col ecs-two-col--images">
          <div className="ecs-media reveal-left">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/customers.jpg"
              alt="Co-creating with customers"
            />
          </div>

          <div className="ecs-media reveal-right">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/co-creating-graph.jpg"
              alt="System simulation and module configuration"
            />
          </div>
        </div>

        <div className="ecs-two-col ecs-two-col--text">
          <div className="ecs-content reveal-left">
            <h3 className="ecs-block-title">
              Our early-stage partnership for product development includes:
            </h3>
            <ul className="ecs-bullet-list">
              {coCreateEarlyStage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ecs-content reveal-right">
            <h3 className="ecs-block-title">Detailed technical steps include:</h3>
            <ul className="ecs-bullet-list">
              {coCreateTechnicalSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROBUST DESIGN OF HEAT EXCHANGERS */}
      <section className="ecs-section ecs-panel">
        <div className="ecs-two-col ecs-panel-inner">
          <div className="ecs-media reveal-left">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/designing-cooling-system.jpg"
              alt="Heat exchanger design"
            />
          </div>

          <div className="ecs-content reveal-right">
            <h3 className="ecs-block-title">
              Developing robust design of heat exchangers
            </h3>
            <p>
              Designing cooling modules such as radiators or charge-air coolers
              that fulfil high-performance expectations is both a challenge and
              an opportunity for Banco designers.
            </p>
            {robustDesignPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFICATION & PROTOTYPING */}
      <section className="ecs-section ecs-verification">
        <div className="ecs-two-col ecs-two-col--cards">
          <article className="ecs-card reveal-left">
            <div className="ecs-card-media">
              <img
                src="https://www.bancoindia.com/wp-content/uploads/2017/06/design-simulation.png"
                alt="Design verification and simulation"
              />
            </div>
            <div className="ecs-card-body">
              <h3 className="ecs-block-title">
                Design verification and simulation
              </h3>
              <p>
                Our design engineers use modern tools for design verification
                before offering solutions to our customers:
              </p>
              <ul className="ecs-bullet-list">
                {verificationBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="ecs-card reveal-right">
            <div className="ecs-card-media">
              <img
                src="https://www.bancoindia.com/wp-content/uploads/2017/06/prototyping1.png"
                alt="Prototyping methodology"
              />
            </div>
            <div className="ecs-card-body">
              <h3 className="ecs-block-title">Prototyping</h3>
              <p>
                In a highly dynamic market, customers expect a significant
                increase in “time-to-market” efficiency. Banco responds with a
                dedicated prototype development shop:
              </p>
              <ul className="ecs-bullet-list">
                {prototypingBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* DESIGN VALIDATION */}
      <section className="ecs-section ecs-panel">
        <div className="ecs-two-col ecs-panel-inner">
          <div className="ecs-media ecs-media-small reveal-left">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/design-validation.png"
              alt="CFD around truck"
            />
          </div>

          <div className="ecs-content reveal-right">
            <h3 className="ecs-block-title">Design validation</h3>
            <p>
              To ensure that our designs meet fit, form and functional
              requirements specified by our customers, we use both analytical
              and physical testing methods. Advanced analytical methods such as
              FEA and CFD are complemented by extensive in-house durability
              testing capabilities.
            </p>
            <p>Some of the critical test capabilities at Banco include:</p>

            <div className="ecs-two-col ecs-two-col--bullets">
              <ul className="ecs-bullet-list">
                {validationLeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="ecs-bullet-list">
                {validationRight.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRESSURE & TEMPERATURE CYCLE RIGS */}
      <section className="ecs-section ecs-rigs-pair">
        <div className="ecs-rigs-grid">
          <article className="ecs-rig-card reveal-left">
            <div className="ecs-rig-image-wrap">
              <img
                src="https://www.bancoindia.com/wp-content/uploads/2017/06/pressure-cycle-rig.jpg"
                alt="Pressure cycle rig"
              />
            </div>
            <div className="ecs-rig-body">
              <h3 className="ecs-block-title">Pressure cycle rig</h3>
              <p>
                Pressure cycle tests are done to perform durability test for the
                components exposed to rapid pressure changes. This rig has a
                decisive role in Banco’s product research and development
                process. We follow international standards like IS13686:1993
                and other standards and specifications based on mutual
                agreement with our customers.
              </p>
            </div>
          </article>

          <article className="ecs-rig-card reveal-right">
            <div className="ecs-rig-image-wrap">
              <img
                src="https://www.bancoindia.com/wp-content/uploads/2017/06/temperature-cycle-rig.jpg"
                alt="Temperature cycle rig"
              />
            </div>
            <div className="ecs-rig-body">
              <h3 className="ecs-block-title">Temperature cycle rig</h3>
              <p>
                Temperature cycle test is the process of cycling through two
                temperature extremes, typically at a high rate of change. It is
                an environmental stress test used for evaluating product
                reliability and for the detection of latent defects by inducing
                failure through thermal fatigue.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* WIND TUNNEL */}
      <section className="ecs-section ecs-panel ecs-wind-panel">
        <div className="ecs-two-col ecs-panel-inner">
          <div className="ecs-content reveal-left">
            <h3 className="ecs-block-title">Wind tunnel</h3>
            <p>
              Banco’s wind tunnel test facility provides a distinct advantage in
              product development by enabling us to test different core
              configurations quickly. Engineers fine-tune performance using
              modern tools under varying conditions such as:
            </p>
            <ul className="ecs-bullet-list">
              {windTunnelBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              By using the wind tunnel facility, we simulate and monitor real
              environmental conditions to validate product performance and meet
              international standards as well as specific customer test
              requirements.
            </p>
          </div>

          <div className="ecs-media reveal-right">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/windtunnel.jpg"
              alt="Wind tunnel rig"
            />
          </div>
        </div>
      </section>

      {/* VEHICLE-LEVEL VALIDATION */}
      <section className="ecs-section ecs-vehicle">
        <div className="ecs-two-col">
          <div className="ecs-media reveal-left ecs-media-wide">
            <img
              src="https://www.bancoindia.com/wp-content/uploads/2017/06/vehicle-validation-1.jpg"
              alt="Vehicle level validation"
            />
          </div>

          <div className="ecs-content reveal-right">
            <h3 className="ecs-block-title">
              Cooperating with our customers for vehicle-level validation
            </h3>
            <p>
              Our engineers actively participate in vehicle-level tests carried
              out by customers, such as powertrain cooling tests. Close
              cooperation with design experts from customer organisations
              ensures that every stage of product development is aligned with
              performance expectations – and often exceeds them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineCoolingPage;
