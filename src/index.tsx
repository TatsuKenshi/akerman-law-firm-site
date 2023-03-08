import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PageHero from "./components/PageHero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <SidebarProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <PageHero />
          <App />
          <ScrollToTop />
          <Footer />
        </Router>
      </SidebarProvider>
    </I18nextProvider>
  </React.StrictMode>
);
