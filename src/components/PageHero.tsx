import ProgressiveImage from "react-progressive-graceful-image";
import banner2 from "../assets/naslovna2.jpg";
import placeholderSrc from "../assets/naslovna2Small.jpg";

const PageHero = () => {
  return (
    <div className="h-96 lg:h-[450px] mt-8 overflow-hidden">
      <ProgressiveImage src={banner2} placeholder={placeholderSrc}>
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
