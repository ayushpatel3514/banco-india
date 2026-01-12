// src/pages/ApplicationsPage.jsx
import React, { useEffect, useState } from "react";
import "./ApplicationTemplate.css";

const APPS = [
  {
    id: "4x4-suv",
    label: "4×4 / SUV",
    title: "4×4 / SUV",
    image: "/public/application1.png",
    paragraphs: [
      "We offer compact cross-flow and down-flow aluminium radiators in various core thicknesses with superior B-tube technology for maximum cooling.",
      "Compact charge air coolers with high-temperature plastic tanks or traditional welded aluminium tanks are available. For enhanced cooling and compact size of the charge air cooler, new welded tubes with inner fins (turbulators) are available.",
    ],
    listTitle:
      "We offer complete cooling packages which can include any of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Charge air coolers",
      "Condensers",
      "Transmission oil coolers – plate type",
    ],
  },
  {
    id: "on-highway",
    label: "On highway (trucks & buses)",
    title: "On highway (trucks & buses)",
    image: "/public/application2.png",
    paragraphs: [
      "We offer complete cooling modules including steel mounting frame, de-aeration tank, fan cowl, radiator, condenser, transmission cooler, diesel cooler and inter-cooler.",
      "Aluminium charge air coolers are available with cores in extruded tubes or welded tubes with inner turbulators, and louvered / un-louvered fins. Extra large aluminium radiators can be supplied for engines up to 350 HP and more.",
    ],
    listTitle:
      "We offer complete cooling packages which can include any of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Charge air coolers",
      "Transmission & torque converter oil coolers",
      "Fuel / diesel coolers",
    ],
  },
  {
    id: "off-highway",
    label: "Off highway",
    title: "Off highway (earth moving)",
    image: "/public/application3.png",
    paragraphs: [
      "We offer heavy-duty copper / brass radiators for off-highway and mining trucks used in construction and mining industries.",
      "Rugged, anti-clogging fin designs are customised for harsh environments. Banco uses in-house developed components, dampeners and tube blockers to isolate the cooling modules from extreme vibrations.",
    ],
    listTitle:
      "We offer complete cooling packages which can include any of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Hydraulic oil coolers",
      "Transmission & torque converter oil coolers",
      "Diesel fuel coolers",
      "Engine lube oil coolers",
    ],
  },
  {
    id: "tractors-agri",
    label: "Tractors & agriculture machinery",
    title: "Tractors & agriculture machinery",
    image: "/public/application4.png",
    paragraphs: [
      "We offer aluminium radiators with special anti-clogging un-louvered fins to minimise debris clogging and ensure a reliable, maintenance-free product in the field.",
      "Plastic or metal cowls are available depending on the application. Radiators are available from 15 HP to 240 BHP, and traditional copper / brass radiators for extra-high power farm equipment.",
    ],
    listTitle:
      "We offer complete cooling packages which can include any of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Charge air coolers",
      "Transmission oil coolers",
      "Hydraulic oil coolers",
    ],
  },
  {
    id: "construction-material",
    label: "Construction material handling equipment",
    title: "Construction material handling equipment",
    image: "/public/application5.png",
    paragraphs: [
      "We offer specialised aluminium and copper / brass cooling systems depending on the application and environment.",
      "Cooling packages are designed to withstand extreme vibrations, thermal conditions and dusty work environments while optimising heat-exchanger configuration for maximum cooling.",
    ],
    listTitle:
      "Typical cooling packages can include any combination of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Transmission oil coolers",
      "Hydraulic oil coolers",
      "Charge air coolers",
      "Fuel / diesel coolers",
    ],
  },
  {
    id: "locomotives",
    label: "Locomotives diesel/electric",
    title: "Locomotives diesel / electric",
    image: "/public/application6.png",
    paragraphs: [
      "Banco specialises in extra-large copper / brass cooling systems for diesel-powered locomotives with up to 4000 HP engines.",
      "We offer radiators with welded tubes, mechanically bonded after-coolers and plate-type lube-oil coolers, as well as aluminium converter / transformer oil coolers for electric locomotives up to 6000 HP.",
    ],
    listTitle: "",
    bullets: [],
  },
  {
    id: "gensets",
    label: "Gensets",
    title: "Gensets",
    image: "/public/application7.png",
    paragraphs: [
      "For gensets from 7.5 to 200 kVA we offer highly efficient aluminium cooling packages for operation in closed, sound-insulated canopies.",
      "For gensets from 200 to 3000 kVA we supply heavy-duty copper / brass radiators in tandem with aluminium charge air coolers, fuel coolers and after-coolers, with plug-and-play assemblies including fan and motor.",
    ],
    listTitle: "",
    bullets: [],
  },
  {
    id: "windmills",
    label: "Windmills",
    title: "Windmills",
    image: "/public/application8.png",
    paragraphs: [
      "Banco offers a complete package for the cooling requirements of wind mills.",
      "We manufacture aluminium oil coolers of plate & bar design for gearboxes along with air-to-air coolers for armature coil cooling, with cores up to 2 metres in length and around 250 kg.",
    ],
    listTitle: "",
    bullets: [],
  },
  {
    id: "motorcycles",
    label: "Motorcycles",
    title: "Motorcycles",
    image: "/public/application9.png",
    paragraphs: [
      "Banco offers cooling solutions tailored to the compact packaging needs of modern motorcycles while maximising space utilisation.",
    ],
    listTitle: "Our motorcycle cooling systems can include:",
    bullets: [
      "All-aluminium radiators in optimised shapes",
      "Transmission oil coolers",
      "Engine oil coolers",
    ],
  },
  {
    id: "forestry",
    label: "Forestry equipment",
    title: "Forestry equipment",
    image: "/public/application10.png",
    paragraphs: [
      "For tractors and forest machinery we offer aluminium radiators with anti-clogging un-louvered fins to minimise debris build-up.",
      "Plastic or metal cowls are available for farm or forestry applications, with copper / brass radiators available for extra-high power requirements.",
    ],
    listTitle:
      "We offer complete cooling packages which can include any of the following heat exchangers:",
    bullets: [
      "Radiators",
      "Charge air coolers",
      "Transmission oil coolers",
      "Hydraulic oil coolers",
    ],
  },
  {
    id: "compressors",
    label: "Compressors",
    title: "Compressors",
    image: "/public/application11.png",
    paragraphs: [
      "We offer plate & bar design cooling packages for Compressors of 10 kW to 150 kW. The plate & bar design is specifically used for this application, to withstand the high pressures.",
    ],
    // first group – screw type
    listTitle:
      "For Screw Type Compressors, we offer cooling packages which can include any of the following heat exchangers:",
    bullets: ["After coolers", "Oil coolers"],
    // second group – reciprocating type
    secondaryListTitle:
      "For Reciprocating Type Compressors, we offer cooling packages which can include any of the following heat exchangers:",
    secondaryBullets: ["After coolers", "Radiator"],
  },
];

const ApplicationsPage = () => {
  const [activeId, setActiveId] = useState(APPS[0].id);
  const active = APPS.find((a) => a.id === activeId) || APPS[0];

  // Scroll to top on first mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Re-trigger row animation whenever tab changes
  useEffect(() => {
    const row = document.querySelector(".app-row");
    if (!row) return;

    row.classList.remove("is-visible");
    // force reflow to restart animation
    // eslint-disable-next-line no-unused-expressions
    row.offsetWidth;
    row.classList.add("is-visible");
  }, [activeId]);

  return (
    <div className="app-page">
      <section className="app-section">
        <div className="app-shell app-shell--with-sidebar">
          {/* LEFT: vertical tab buttons */}
          <aside className="app-sidebar">
            {APPS.map((app) => (
              <button
                key={app.id}
                type="button"
                className={
                  "app-nav-btn" + (app.id === activeId ? " is-active" : "")
                }
                onClick={() => setActiveId(app.id)}
              >
                {app.label}
              </button>
            ))}
          </aside>

          {/* RIGHT: title + animated card & text */}
          <div className="app-main">
            <div key={active.id} className="app-main-inner">
              <header className="app-header">
                <p className="app-kicker">Applications</p>
                <h1 className="app-title">{active.title}</h1>
                <div className="app-underline" />
              </header>

              <div className="app-row is-visible">
                <div className="app-media">
                  <div className="app-media-inner">
                    <img src={active.image} alt={active.title} />
                  </div>
                </div>

                <div className="app-text">
                  {active.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {/* primary list */}
                  {active.bullets && active.bullets.length > 0 && (
                    <>
                      {active.listTitle && (
                        <p className="app-list-title">{active.listTitle}</p>
                      )}
                      <ul className="app-bullet-list">
                        {active.bullets.map((b, idx) => (
                          <li key={`p-${idx}`}>{b}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* optional secondary list (used for Compressors) */}
                  {active.secondaryBullets &&
                    active.secondaryBullets.length > 0 && (
                      <>
                        {active.secondaryListTitle && (
                          <p className="app-list-title app-list-title--secondary">
                            {active.secondaryListTitle}
                          </p>
                        )}
                        <ul className="app-bullet-list">
                          {active.secondaryBullets.map((b, idx) => (
                            <li key={`s-${idx}`}>{b}</li>
                          ))}
                        </ul>
                      </>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
