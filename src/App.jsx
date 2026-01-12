// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HoverNav from "./components/navigation/HoverNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";

import EngineCoolingPage from "./pages/EngineCoolingPage.jsx";
import EngineSealingPage from "./pages/EngineSealingPage.jsx";

import ProductsEngineCoolingPage from "./pages/ProductsEngineCoolingPage.jsx";
import ProductsEngineSealingPage from "./pages/ProductsEngineSealingPage.jsx";

import IntegratedEngineCoolingPage from "./pages/IntegratedEngineCoolingPage.jsx";
import IntegratedEngineSealingPage from "./pages/IntegratedEngineSealingPage.jsx";
import IntegratedWarehousingLogisticsPage from "./pages/IntegratedWarehousingLogisticsPage.jsx";

import ApplicationsPage from "./pages/ApplicationsPage.jsx";
import PeopleTeamPage from "./pages/PeopleTeamPage.jsx";

import CertificationsPage from "./pages/CertificationsPage.jsx";
import AchievementsPage from "./pages/AchievementsPage.jsx";
import ClientsPage from "./pages/ClientsPage.jsx";

import SiteFooter from "./components/layout/SiteFooter";
import "./pages/ApplicationTemplate.css";
import InvestorRelationsPage from "./pages/InvestorRelationsPage";
const App = () => {
  return (
    <>
      <HoverNav />

      <main className="page-shell">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Company */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/certifications" element={<CertificationsPage />} />
          <Route path="/company/achievements" element={<AchievementsPage />} />
          <Route path="/company/clients" element={<ClientsPage />} />

          {/* Bespoke engineering */}
          <Route
            path="/bespoke-engineering/engine-cooling"
            element={<EngineCoolingPage />}
          />
          <Route
            path="/bespoke-engineering/engine-sealing"
            element={<EngineSealingPage />}
          />

          {/* Products */}
          <Route
            path="/products/engine-cooling"
            element={<ProductsEngineCoolingPage />}
          />
          <Route
            path="/products/engine-sealing"
            element={<ProductsEngineSealingPage />}
          />

          {/* Integrated manufacturing */}
          <Route
            path="/integrated/engine-cooling"
            element={<IntegratedEngineCoolingPage />}
          />
          <Route
            path="/integrated/engine-sealing"
            element={<IntegratedEngineSealingPage />}
          />
          <Route
            path="/integrated/warehousing-logistics"
            element={<IntegratedWarehousingLogisticsPage />}
          />

          {/* Applications */}
          <Route path="/applications" element={<ApplicationsPage />} />

          {/* People */}
          <Route path="/people/our-team" element={<PeopleTeamPage />} />
          <Route path="/investor-relations" element={<InvestorRelationsPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </>
  );
};

export default App;
