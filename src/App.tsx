import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  // add a useEffect/custom hook which will switch page titles
  // Home page - about section localization and content - waiting
  // Services/RevealCard - pics/icons and styling for reveal cards
  // PageHero - banner content customization and localization - waiting
  // PageHero - banner image - waiting
  // PageHero - move props textNodes to localization json files
  // useText - move textNodes for cards to localization json files
  // Error page - localization

  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="services"
        element={
          <React.Suspense fallback={<>...</>}>
            <Services />
          </React.Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <React.Suspense fallback={<>...</>}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
