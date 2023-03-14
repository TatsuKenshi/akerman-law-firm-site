import React from "react";
import { withTranslation } from "react-i18next";
// import { cardItems } from "../content/content";
import useText from "../hooks/useText";

const PageHero = React.lazy(() => import("../components/PageHero"));
const FlipCard = React.lazy(() => import("../components/FlipCard"));
const RevealCard = React.lazy(() => import("../components/RevealCard"));

const Services = ({ t }: any) => {
  const {
    textSr1,
    textEng1,
    textSr2,
    textEng2,
    textSr3,
    textEng3,
    textSr4,
    textEng4,
    textSr5,
    textEng5,
    textSr6,
    textEng6,
    textSr7,
    textEng7,
    cardItems,
  } = useText();

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

      {/* flip card section */}
      <section className="mt-8">
        <div className="flex max-w-[1200px] mx-auto justify-evenly flex-wrap mt-4 px-8 pt-4">
          {cardItems.map((item) => {
            return <FlipCard key={item.id} {...item} />;
          })}
        </div>
      </section>

      {/* reveal card section */}
      <section>
        <div className="flex h-max max-w-[1200px] mx-auto justify-center lg:justify-evenly flex-wrap mt-4 px-4 pt-4">
          <RevealCard textSr={textSr1} textEng={textEng1} />
          <RevealCard textSr={textSr2} textEng={textEng2} />
          <RevealCard textSr={textSr3} textEng={textEng3} />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard textSr={textSr4} textEng={textEng4} />
          <RevealCard textSr={textSr5} textEng={textEng5} />
          <RevealCard textSr={textSr6} textEng={textEng6} />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard textSr={textSr7} textEng={textEng7} />
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Services);
