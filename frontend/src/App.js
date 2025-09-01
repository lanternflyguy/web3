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
              <Route path="/reproduction" element={<ReproductionPage />} />
              <Route path="/sterilization" element={<SterilizationPage />} />
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