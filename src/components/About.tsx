import { withTranslation } from "react-i18next";

const About = ({ t }: any) => {
  return (
    <section className="mt-8 mb-16">
      <div className="flex max-w-[1200px] mx-auto flex-wrap mt-4 px-8 pt-4">
        <h3 className="text-2xl font-bold text-sky-900 w-full">
          {t("AboutCompanyName")}
        </h3>
        <p>{t("AboutCompanyNameParagraph")}</p>
        <h3 className="text-2xl font-bold text-sky-900 mt-8 w-full">
          {t("AboutAreas")}
        </h3>
        <p>{t("AboutAreasParagraph")}</p>
      </div>
    </section>
  );
};

export default withTranslation()(About);
