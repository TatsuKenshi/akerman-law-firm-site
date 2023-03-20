import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import useText from "../hooks/useText";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../translation";
import justice from "../assets/justice.jpg";
import justiceSmall from "../assets/justiceSmall.jpg";

const PageHero = React.lazy(() => import("../components/PageHero"));
const RevealCard = React.lazy(() => import("../components/RevealCard"));

const Services = ({ t }: any) => {
  const {
    textSr1: TextSr1,
    textEng1: TextEng1,
    textSr2: TextSr2,
    textEng2: TextEng2,
    textSr3: TextSr3,
    textEng3: TextEng3,
    textSr4: TextSr4,
    textEng4: TextEng4,
    textSr5: TextSr5,
    textEng5: TextEng5,
    textSr6: TextSr6,
    textEng6: TextEng6,
    textSr7: TextSr7,
    textEng7: TextEng7,
  } = useText();

  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Services", srTitle: "Usluge" });
  }, [language, changeTitle]);

  return (
    <main>
      <PageHero
        srTitle="Usluge"
        srContent="Advokatska kancelarija Akerman Vam pruža punu pravnu i administrativnu podršku u vezi svih pravnih i
regulatornih stvari. Naše usluge obuhvataju pravno savetovanje u različitim oblastima prava."
        engTitle="Services"
        engContent="Akerman Law office can offer you tailor-made advice solutions to various queries. We provide legal support
in a wide range of legal areas."
      />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">
          {t("ServicesTitle")}
        </h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      {/* reveal card section */}
      <section>
        <div className="flex h-max max-w-[1200px] mx-auto justify-center lg:justify-evenly flex-wrap mt-4 px-4 pt-4">
          <RevealCard
            titleSr="KOMPANIJSKO PRAVO"
            titleEng="COMPANY LAW"
            TextSr={<TextSr1 />}
            TextEng={<TextEng1 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
          <RevealCard
            titleSr="IZVRŠENJE"
            titleEng="ENFORCEMENT"
            TextSr={<TextSr2 />}
            TextEng={<TextEng2 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
          <RevealCard
            titleSr="NEPOKRETNOSTI"
            titleEng="PROPERTY LAW"
            TextSr={<TextSr3 />}
            TextEng={<TextEng3 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="RADNO PRAVO"
            titleEng="LABOUR LAW"
            TextSr={<TextSr4 />}
            TextEng={<TextEng4 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
          <RevealCard
            titleSr="ZASTUPANJE KLIJENATA PRED SUDOVIMA I DRUGIM DRŽAVNIM ORGANIMA"
            titleEng="REPRESENTING CLIENTS BEFORE THE COURTS AND OTHER STATE BODIES"
            TextSr={<TextSr5 />}
            TextEng={<TextEng5 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
          <RevealCard
            titleSr="NASLEDNO I PORODIČNO PRAVO"
            titleEng="FAMILY AND INHERITANCE LAW"
            TextSr={<TextSr6 />}
            TextEng={<TextEng6 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="UPRAVNO PRAVO"
            titleEng="ADMINISTRATION LAW"
            TextSr={<TextSr7 />}
            TextEng={<TextEng7 />}
            mainImg={justice}
            placeholderImg={justiceSmall}
          />
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Services);
