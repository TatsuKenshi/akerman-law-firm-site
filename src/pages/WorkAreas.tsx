import { withTranslation } from "react-i18next";
import FlipCard from "../components/FlipCard";
import { cardItems } from "../content/content";
import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));

const WorkAreas = ({ t }: any) => {
  return (
    <main>
      <PageHero />

      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">
          {t("WorkAreasTitle")}
        </h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      <section className="mt-8">
        <div className="flex max-w-[1200px] mx-auto justify-evenly flex-wrap mt-4 px-8 pt-4">
          {cardItems.map((item) => {
            return <FlipCard key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(WorkAreas);
