import { withTranslation } from "react-i18next";
import FlipCard from "../components/FlipCard";
import { cardItems } from "../content/content";
import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));

const WorkAreas = ({ t }: any) => {
  return (
    <main>
      <PageHero />

      <section className="pt-4 mt-8">
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
