import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageHero = React.lazy(() => import("../components/PageHero"));

const Error = ({ t }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <main>
      <PageHero />

      {/* error and redirection message section */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-9xl font-bold text-sky-900">404</h1>
        <p className="text-xl font-bold text-sky-900">
          Ova stranica ne postoji.
        </p>
        <p className="text-xl font-bold text-sky-900">
          This page does not exist.
        </p>
        <p>Uskoro ćete biti prebačeni na Početnu stranicu.</p>
        <p className="mb-16">
          You will be redirected to the Home page shortly.
        </p>
      </div>
    </main>
  );
};

export default Error;
