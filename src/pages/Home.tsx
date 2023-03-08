import React from "react";
import { withTranslation } from "react-i18next";
import { members } from "../content/content";

const PageHero = React.lazy(() => import("../components/PageHero"));
const TeamMemberCard = React.lazy(() => import("../components/TeamMemberCard"));

const Home = ({ t }: any) => {
  return (
    <main className="overflow-hidden">
      <PageHero />

      {/* title div */}
      <div className="mt-8 text-center mx-4">
        <h1 className="text-4xl font-bold text-sky-900">{t("MeetTheTeam")}</h1>
        <div className="h-[4px] w-11/12 max-w-[270px] bg-yellow-700 bg-opacity-70 mx-auto mt-2"></div>
      </div>

      {/* flip card section */}
      <section className="mt-8">
        <div className="flex max-w-[1200px] mx-auto justify-evenly flex-wrap mt-4 px-8 pt-4">
          {members.map((member) => {
            return <TeamMemberCard key={member.id} {...member} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default withTranslation()(Home);
