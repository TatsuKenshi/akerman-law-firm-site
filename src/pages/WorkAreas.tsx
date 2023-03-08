import { withTranslation } from "react-i18next";
import FlipCard from "../components/FlipCard";
import { cardItems } from "../content/content";
import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));

const WorkAreas = (t: any) => {
  return (
    <main>
      <PageHero />

      <div className="flex">
        {cardItems.map((item) => {
          return <FlipCard key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};

export default withTranslation()(WorkAreas);
