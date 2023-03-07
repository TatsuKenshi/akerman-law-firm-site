import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageHero from "./components/PageHero";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <PageHero />
        <App />
        <ScrollToTop />
        <Footer />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
