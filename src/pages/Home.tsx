import React from "react";
import { withTranslation } from "react-i18next";

const PageHero = React.lazy(() => import("../components/PageHero"));
const About = React.lazy(() => import("../components/About"));

const Home = ({ t }: any) => {
  return (
    <main className="overflow-hidden">
      <PageHero
        srTitle="Početna"
        srContent="Advokatska kancelarija Akerman Vam pruža punu pravnu i administrativnu podršku u vezi svih pravnih i
regulatornih stvari. Naše usluge obuhvataju pravno savetovanje u različitim oblastima prava."
        engTitle="Home"
        engContent="Akerman Law office can offer you tailor-made advice solutions to various queries. We provide legal support
in a wide range of legal areas."
      />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">{t("AboutUs")}</h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      <About />
    </main>
  );
};

export default withTranslation()(Home);
