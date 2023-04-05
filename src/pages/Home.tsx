import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../translation";

const HomeHero = React.lazy(() => import("../components/HomeHero"));
const PageHero = React.lazy(() => import("../components/PageHero"));
const About = React.lazy(() => import("../components/About"));

const Home = ({ t }: any) => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

  return (
    <main className="overflow-hidden">
      {/* <HomeHero /> */}
      <PageHero />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">{t("AboutUs")}</h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      {/* about section */}
      <About />
    </main>
  );
};

export default withTranslation()(Home);
