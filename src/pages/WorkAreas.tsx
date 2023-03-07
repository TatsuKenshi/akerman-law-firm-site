import { withTranslation } from "react-i18next";
import FlipCard from "../components/FlipCard";
import { cardItems } from "../content/content";

const WorkAreas = (t: any) => {
  return (
    <div className="flex">
      {cardItems.map((item) => {
        return <FlipCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default withTranslation()(WorkAreas);
