import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const WorkAreas = React.lazy(() => import("./pages/WorkAreas"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  // add a useEffect/custom hook which will switch page titles
  // about page, with social links, company history, company info (address/google map, year of founding, etc)
  // finish contacts page with email.js
  // error page with home page redirection
  // add social links to the sidebar

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
        path="contact"
        element={
          <React.Suspense fallback={<>...</>}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="workareas"
        element={
          <React.Suspense fallback={<>...</>}>
            <WorkAreas />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
