import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";

const Error = () => {
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
        <h1 className="text-4xl font-bold text-sky-900">Error</h1>
        <h4 className="text-xl font-bold text-sky-900">
          This page doesn't exist
        </h4>
        <p>You will be redirected to the home page shortly.</p>
      </div>
    </main>
  );
};

export default Error;
