import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../translation";

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
      <PageHero />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">{t("AboutUs")}</h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      <About />

      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "black", textAlign: "center" }}
        buttonStyle={{
          color: "black",
          background: "green",
          borderRadius: "20px",
          fontSize: "1rem",
        }}
        buttonText="Alright!"
        expires={1}
      >
        This Site Uses Cookies. Check out our{" "}
        <a href="/terms">privacy policy</a> for more info.
      </CookieConsent>
    </main>
  );
};

export default withTranslation()(Home);
