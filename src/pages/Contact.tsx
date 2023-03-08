import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));

const Contact = () => {
  return (
    <main>
      <PageHero />
    </main>
  );
};

export default Contact;
