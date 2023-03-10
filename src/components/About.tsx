import React from "react";
import { withTranslation } from "react-i18next";

const About = ({ t }: any) => {
  return (
    <section className="mt-8 mb-8">
      <div className="flex max-w-[1200px] mx-auto flex-wrap mt-4 px-8 pt-4">
        <h3 className="text-2xl font-bold text-sky-900">
          {t("AboutCompanyName")}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, totam!
          Voluptate consectetur qui fugiat molestias impedit, excepturi minima
          ipsum repellat dolorum blanditiis consequatur quidem deleniti labore
          ipsa sit accusamus pariatur autem libero tenetur. Vero quas provident
          vel placeat ipsa? Minima similique quasi rerum, odio exercitationem
          accusantium earum dignissimos laborum a.
        </p>
        <h3 className="text-2xl font-bold text-sky-900 mt-4">
          {t("AboutHistory")}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          dignissimos animi repellat iusto perferendis veniam quas nemo at
          accusamus! Libero velit ad nemo perferendis ut at. Consequatur
          asperiores eligendi doloremque sed vel. Commodi reiciendis quibusdam
          quod ad ea inventore nam dolorem, fugit maxime minus reprehenderit
          sapiente? Dolor expedita necessitatibus eius!
        </p>
        <h3 className="text-2xl font-bold text-sky-900 mt-4">
          {t("AboutAreas")}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          dignissimos animi repellat iusto perferendis veniam quas nemo at
          accusamus! Libero velit ad nemo perferendis ut at. Consequatur
          asperiores eligendi doloremque sed vel. Commodi reiciendis quibusdam
          quod ad ea inventore nam dolorem, fugit maxime minus reprehenderit
          sapiente? Dolor expedita necessitatibus eius!
        </p>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-sky-900 mt-4">
            {t("AboutInfo")}
          </h3>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="w-full md:w-1/2 mb-8">
            <p>
              Company seat: <br /> Ruzveltova 10, 11000 Belgrade
            </p>
            <p>
              Working hours: <br /> Monday - Friday 09-17
            </p>
          </div>
          <div className="w-full md:w-1/2 mb-8">
            <p>
              Phone number: <br /> (+381)64/123-45-67
            </p>
            <p>
              Email address: <br /> www.saraakerman.rs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(About);
