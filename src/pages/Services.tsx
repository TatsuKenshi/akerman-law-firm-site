import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import useText from "../hooks/useText";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../translation";
import Administrative from "../assets/Administrative.jpg";
import AdministrativeSmall from "../assets/AdministrativeSmall.jpg";
import Company from "../assets/Company.jpg";
import CompanySmall from "../assets/CompanySmall.jpg";
import Enforcement1 from "../assets/Enforcement1.jpg";
import Enforcement1Small from "../assets/Enforcement1Small.jpg";
import Enforcement3 from "../assets/Enforcement3.jpg";
import Enforcement3Small from "../assets/Enforcement3Small.jpg";
import FamilyAndInheritance1 from "../assets/FamilyAndInheritance1.jpg";
import FamilyAndInheritance1Small from "../assets/FamilyAndInheritance1Small.jpg";
import Labour1 from "../assets/Labour1.jpg";
import Labour1Small from "../assets/Labour1Small.jpg";
import Property1 from "../assets/Property1.jpg";
import Property1Small from "../assets/Property1Small.jpg";
import RepresentingClients from "../assets/RepresentingClients.jpg";
import RepresentingClientsSmall from "../assets/RepresentingClientsSmall.jpg";

const PageHero = React.lazy(() => import("../components/PageHero"));
const RevealCard = React.lazy(() => import("../components/RevealCard"));
const DropDownMenu = React.lazy(() => import("../components/DropDownMenu"));
const HomeHero = React.lazy(() => import("../components/HomeHero"));

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
      <PageHero srTitle="" srContent="" engTitle="" engContent="" />
      {/* <HomeHero srTitle="" srContent="" engTitle="" engContent="" /> */}

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">
          {t("ServicesTitle")}
        </h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      {/* Dropdown menu section */}
      <DropDownMenu />

      {/* reveal card section */}
      <section>
        <div className="flex h-max max-w-[1200px] mx-auto justify-center lg:justify-evenly flex-wrap mt-4 px-4 pt-4">
          <RevealCard
            titleSr="KOMPANIJSKO PRAVO"
            titleEng="COMPANY LAW"
            TextSr={<TextSr1 />}
            TextEng={<TextEng1 />}
            mainImg={Company}
            placeholderImg={CompanySmall}
          />
          <RevealCard
            titleSr="IZVRŠENJE"
            titleEng="ENFORCEMENT"
            TextSr={<TextSr2 />}
            TextEng={<TextEng2 />}
            mainImg={Enforcement1}
            placeholderImg={Enforcement1Small}
          />
          <RevealCard
            titleSr="NEPOKRETNOSTI"
            titleEng="PROPERTY LAW"
            TextSr={<TextSr3 />}
            TextEng={<TextEng3 />}
            mainImg={Property1}
            placeholderImg={Property1Small}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="RADNO PRAVO"
            titleEng="LABOUR LAW"
            TextSr={<TextSr4 />}
            TextEng={<TextEng4 />}
            mainImg={Labour1}
            placeholderImg={Labour1Small}
          />
          <RevealCard
            titleSr="ZASTUPANJE KLIJENATA PRED SUDOVIMA I DRUGIM DRŽAVNIM ORGANIMA"
            titleEng="REPRESENTING CLIENTS BEFORE THE COURTS AND OTHER STATE BODIES"
            TextSr={<TextSr5 />}
            TextEng={<TextEng5 />}
            mainImg={RepresentingClients}
            placeholderImg={RepresentingClientsSmall}
          />
          <RevealCard
            titleSr="NASLEDNO I PORODIČNO PRAVO"
            titleEng="FAMILY AND INHERITANCE LAW"
            TextSr={<TextSr6 />}
            TextEng={<TextEng6 />}
            mainImg={FamilyAndInheritance1}
            placeholderImg={FamilyAndInheritance1Small}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="UPRAVNO PRAVO"
            titleEng="ADMINISTRATION LAW"
            TextSr={<TextSr7 />}
            TextEng={<TextEng7 />}
            mainImg={Administrative}
            placeholderImg={AdministrativeSmall}
          />
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Services);
