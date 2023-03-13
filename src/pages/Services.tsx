import { withTranslation } from "react-i18next";
import { cardItems } from "../content/content";
import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));
const FlipCard = React.lazy(() => import("../components/FlipCard"));
const RevealCard = React.lazy(() => import("../components/RevealCard"));

const Services = ({ t }: any) => {
  return (
    <main>
      <PageHero />

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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          voluptatibus dolorum quia, cupiditate illum quis sit incidunt
          consequuntur, eum aliquam libero ab culpa facilis animi assumenda.
          Animi eius, blanditiis numquam modi ad, aliquid reiciendis libero
          nostrum nobis, nisi neque deleniti.
        </p>
      </section>

      {/* reveal card section */}
      <section>
        <div className="flex flex-col md:flex-row h-max max-w-[1200px] mx-auto justify-evenly flex-wrap mt-4 px-4 pt-4">
          <RevealCard
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro odit veritatis excepturi quod maiores delectus neque, placeat dolorem vitae."
            height="250"
          />
          <RevealCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus dolorum quia, cupiditate illum quis sit incidunt consequuntur, eum aliquam libero ab culpa facilis animi assumenda. Animi eius, blanditiis numquam modi ad, aliquid reiciendis libero nostrum nobis, nisi neque deleniti."
            height="400"
          />
          <RevealCard
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae earum fugiat eaque culpa? Facilis iste odio officia, facere voluptatum corrupti qui et debitis ab porro aliquam libero eaque incidunt ipsum!"
            height="300"
          />
        </div>
        <div className="flex flex-col md:flex-row h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae earum fugiat eaque culpa? Facilis iste odio officia, facere voluptatum corrupti qui et debitis ab porro aliquam libero eaque incidunt ipsum!"
            height="300"
          />
          <RevealCard
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro odit veritatis excepturi quod maiores delectus neque, placeat dolorem vitae."
            height="250"
          />
          <RevealCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus dolorum quia, cupiditate illum quis sit incidunt consequuntur, eum aliquam libero ab culpa facilis animi assumenda. Animi eius, blanditiis numquam modi ad, aliquid reiciendis libero nostrum nobis, nisi neque deleniti."
            height="400"
          />
        </div>
        <div className="flex flex-col md:flex-row h-max max-w-[1200px] mx-auto justify-evenly flex-wrap px-4">
          <RevealCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus dolorum quia, cupiditate illum quis sit incidunt consequuntur, eum aliquam libero ab culpa facilis animi assumenda. Animi eius, blanditiis numquam modi ad, aliquid reiciendis libero nostrum nobis, nisi neque deleniti."
            height="400"
          />
          <RevealCard
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae earum fugiat eaque culpa? Facilis iste odio officia, facere voluptatum corrupti qui et debitis ab porro aliquam libero eaque incidunt ipsum!"
            height="300"
          />
          <RevealCard
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro odit veritatis excepturi quod maiores delectus neque, placeat dolorem vitae."
            height="250"
          />
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Services);
