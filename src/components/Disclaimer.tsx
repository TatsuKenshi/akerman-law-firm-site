import React from "react";
import { withTranslation } from "react-i18next";

const Disclaimer = ({ t }: any) => {
  return (
    <div>
      <p>{t("Disclaimer1")}</p>
    </div>
  );
};

export default withTranslation()(Disclaimer);
