import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import { FaTimes } from "react-icons/fa";
import eng from "../assets/eng.png";
import ser2 from "../assets/ser2.png";
import { useSidebarContext } from "../context/SidebarContext";
import { SidebarContextType } from "../context/SidebarContext";

const Sidebar = ({ t }: any) => {
  const {
    sidebarStatus,
    setSidebarStatus,
    rotateMenuButton,
    setRotateMenuButton,
    rotateSidebarButton,
    setRotateSidebarButton,
  } = useSidebarContext() as SidebarContextType;

  const handleChange = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <aside
      className={`z-[100] h-full w-full text-white bg-sky-800 bg-opacity-70 fixed top-0 right-0 sm:w-8/12 md:w-6/12 lg:hidden ${
        sidebarStatus === "hidden" ? "translate-x-full" : "translate-x-0"
      } ease-in-out duration-1000`}
    >
      {/* logo and toggle button section */}
      <section className="flex justify-between items-center px-8 h-20 bg-sky-900">
        <div>
          <NavLink to="/">
            <span className="text-3xl font-bold">S. A.</span>
          </NavLink>
        </div>
        <div>
          <button
            type="button"
            className="lg:hidden float-right"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <FaTimes className={`fill-white h-8 w-8 ${rotateSidebarButton}`} />
          </button>
        </div>
      </section>

      {/* links section */}
      <section className="text-center text-2xl mt-24">
        <div className="w-full py-2 px-auto mt-8">
          <NavLink to="/" className="hover:text-yellow-100">
            <span>{t("Home")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink to="/contact" className="hover:text-yellow-100">
            <span>{t("Contact")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8 mb-12">
          <NavLink to="/workareas" className="hover:text-yellow-100">
            <span>{t("WorkAreas")}</span>
          </NavLink>
        </div>
      </section>

      {/* language buttons section */}
      <section className="flex justify-center">
        <div className="w-8 h-8 mr-6">
          <button onClick={() => handleChange("en")} className="rounded-full">
            <img src={eng} alt="" />
          </button>
        </div>

        <div className="w-8 h-8 ml-6">
          <button onClick={() => handleChange("sr")} className="rounded-full">
            <img src={ser2} alt="" />
          </button>
        </div>
      </section>
    </aside>
  );
};

export default withTranslation()(Sidebar);
