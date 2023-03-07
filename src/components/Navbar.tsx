import { withTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <div>
      <span>{t("Home")}</span>
      <span>{t("Contact")}</span>
      <button onClick={() => handleChange("en")}>Eng</button>
      <button onClick={() => handleChange("sr")}>Srb</button>
    </div>
  );
};

export default withTranslation()(Navbar);
