import React from "react";
import { withTranslation } from "react-i18next";

const PageHero = React.lazy(() => import("../components/PageHero"));
const ContactForm = React.lazy(() => import("../components/ContactForm"));

const Contact = ({ t }: any) => {
  return (
    <main>
      <PageHero />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">{t("ContactTitle")}</h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      <ContactForm />
    </main>
  );
};

export default withTranslation()(Contact);
