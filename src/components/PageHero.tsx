import { PageHeroPropsTypes } from "./types";
import ProgressiveImage from "react-progressive-graceful-image";
import banner1 from "../assets/naslovna.jpg";
import placeholderSrc from "../assets/naslovnaSmall.jpg";

const PageHero = (props: PageHeroPropsTypes) => {
  return (
    <div className="h-96 lg:h-[450px] mt-8 overflow-hidden">
      <ProgressiveImage src={banner1} placeholder={placeholderSrc}>
        {(src, loading) => (
          <img
            alt="Corporate Office"
            className={`image${
              loading ? " loading" : " loaded"
            } object-cover h-full min-w-full`}
            src={src}
          />
        )}
      </ProgressiveImage>
    </div>
  );
};

export default PageHero;
