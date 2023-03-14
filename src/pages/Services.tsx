import React from "react";
import { withTranslation } from "react-i18next";
// import { cardItems } from "../content/content";
import useText from "../hooks/useText";

const PageHero = React.lazy(() => import("../components/PageHero"));
// const FlipCard = React.lazy(() => import("../components/FlipCard"));
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
    // cardItems,
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
      {/* <section className="mt-8">
        <div className="flex max-w-[1200px] mx-auto justify-evenly flex-wrap mt-4 px-8 pt-4">
          {cardItems.map((item) => {
            return <FlipCard key={item.id} {...item} />;
          })}
        </div>
      </section> */}

      {/* reveal card section */}
      <section>
        <div className="flex h-max max-w-[1200px] mx-auto justify-center lg:justify-evenly flex-wrap mt-4 px-4 pt-4">
          <RevealCard
            titleSr="KOMPANIJSKO PRAVO"
            titleEng="COMPANY LAW"
            TextSr={<TextSr1 />}
            TextEng={<TextEng1 />}
          />
          <RevealCard
            titleSr="IZVRŠENJE"
            titleEng="ENFORCEMENT"
            TextSr={<TextSr2 />}
            TextEng={<TextEng2 />}
          />
          <RevealCard
            titleSr="NEPOKRETNOSTI"
            titleEng="PROPERTY LAW"
            TextSr={<TextSr3 />}
            TextEng={<TextEng3 />}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="RADNO PRAVO"
            titleEng="LABOUR LAW"
            TextSr={<TextSr4 />}
            TextEng={<TextEng4 />}
          />
          <RevealCard
            titleSr="ZASTUPANJE KLIJENATA PRED SUDOVIMA I DRUGIM DRŽAVNIM ORGANIMA"
            titleEng="REPRESENTING CLIENTS BEFORE THE COURTS AND OTHER STATE BODIES"
            TextSr={<TextSr5 />}
            TextEng={<TextEng5 />}
          />
          <RevealCard
            titleSr="NASLEDNO I PORODIČNO PRAVO"
            titleEng="FAMILY AND INHERITANCE LAW"
            TextSr={<TextSr6 />}
            TextEng={<TextEng6 />}
          />
        </div>
        <div className="flex h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            titleSr="UPRAVNO PRAVO"
            titleEng="ADMINISTRATION LAW"
            TextSr={<TextSr7 />}
            TextEng={<TextEng7 />}
          />
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Services);
