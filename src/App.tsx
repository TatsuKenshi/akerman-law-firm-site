import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  // add a useEffect/custom hook which will switch page titles
  // favicon
  // error page localization
  // pageHero banner localization
  // about section localization

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
