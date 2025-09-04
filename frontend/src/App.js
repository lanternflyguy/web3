import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import HOAPage from "./pages/HOAPage";
import WineryPage from "./pages/WineryPage";
import MunicipalPage from "./pages/MunicipalPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import ReproductionPage from "./pages/ReproductionPage";
import SterilizationPage from "./pages/SterilizationPage";
import OrganicTreatmentPage from "./pages/OrganicTreatmentPage";
import PricingPage from "./pages/PricingPage";
import ManhassetPage from "./pages/ManhassetPage";
import PlainviewPage from "./pages/PlainviewPage";
import OysterBayPage from "./pages/OysterBayPage";
import CommackPage from "./pages/CommackPage";
import UpperBrookvillePage from "./pages/UpperBrookvillePage";
import LaurelHollowPage from "./pages/LaurelHollowPage";
import ColdSpringHarborPage from "./pages/ColdSpringHarborPage";
import NorthportPage from "./pages/NorthportPage";
import EastNorthportPage from "./pages/EastNorthportPage";
import RoslynPage from "./pages/RoslynPage";
import SmithtownPage from "./pages/SmithtownPage";
import MelvillePage from "./pages/MelvillePage";
import PamphletPage from "./pages/PamphletPage";
import OutOfStatePage from "./pages/OutOfStatePage";
import FranchisePage from "./pages/FranchisePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col">
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <BrowserRouter>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/hoa" element={<HOAPage />} />
              <Route path="/wineries" element={<WineryPage />} />
              <Route path="/municipal" element={<MunicipalPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/reproduction" element={<ReproductionPage />} />
              <Route path="/sterilization" element={<SterilizationPage />} />
              <Route path="/manhasset" element={<ManhassetPage />} />
              <Route path="/plainview" element={<PlainviewPage />} />
              <Route path="/oyster-bay" element={<OysterBayPage />} />
              <Route path="/commack" element={<CommackPage />} />
              <Route path="/upper-brookville" element={<UpperBrookvillePage />} />
              <Route path="/laurel-hollow" element={<LaurelHollowPage />} />
              <Route path="/cold-spring-harbor" element={<ColdSpringHarborPage />} />
              <Route path="/northport" element={<NorthportPage />} />
              <Route path="/east-northport" element={<EastNorthportPage />} />
              <Route path="/roslyn" element={<RoslynPage />} />
              <Route path="/smithtown" element={<SmithtownPage />} />
              <Route path="/melville" element={<MelvillePage />} />
              <Route path="/pamphlet" element={<PamphletPage />} />
              <Route path="/out-of-state" element={<OutOfStatePage />} />
              <Route path="/franchise" element={<FranchisePage />} />
              <Route path="/business-proposal" element={<BusinessProposalPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;