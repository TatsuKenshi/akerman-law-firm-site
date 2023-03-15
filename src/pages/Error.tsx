import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { withTranslation } from "react-i18next";

const Error = ({ t }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <main>
      <PageHero
        srTitle="Greška"
        srContent="Advokatska kancelarija Akerman Vam pruža punu pravnu i administrativnu podršku u vezi svih pravnih i
regulatornih stvari. Naše usluge obuhvataju pravno savetovanje u različitim oblastima prava."
        engTitle="Error Page"
        engContent="Akerman Law office can offer you tailor-made advice solutions to various queries. We provide legal support
in a wide range of legal areas."
      />

      {/* error and redirection message section */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-9xl font-bold text-sky-900">
          {t("ErrorPageTitle")}
        </h1>
        <p className="text-xl font-bold text-sky-900">
          Ova stranica ne postoji.
        </p>
        <p className="text-xl font-bold text-sky-900">
          This page doesn't exist.
        </p>
        <p>Uskoro ćete biti prebačeni na Početnu stranicu.</p>
        <p className="mb-16">
          You will be redirected to the home page shortly.
        </p>
      </div>
    </main>
  );
};

export default withTranslation()(Error);
