import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));

const Home = () => {
  return (
    <main className="overflow-hidden">
      <PageHero />
    </main>
  );
};

export default Home;
