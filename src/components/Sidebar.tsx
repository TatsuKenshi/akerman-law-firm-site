import { NavLink, Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import { FaTimes, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
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
      className={`z-[100] h-full w-full text-white bg-sky-900 bg-opacity-90 fixed top-0 right-0 sm:w-8/12 md:w-6/12 lg:hidden ${
        sidebarStatus === "hidden" ? "translate-x-full" : "translate-x-0"
      } ease-in-out duration-1000`}
    >
      {/* logo and toggle button section */}
      <section className="flex justify-between items-center px-8 h-24 bg-sky-900">
        <div>
          <NavLink
            to="/"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-bold hover:text-yellow-700" : ""
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{t("Home")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-bold hover:text-yellow-700" : ""
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{t("Contact")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8 mb-12">
          <NavLink
            to="/workareas"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-bold hover:text-yellow-700" : ""
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{t("WorkAreas")}</span>
          </NavLink>
        </div>
      </section>

      {/* language buttons section */}
      <section className="flex justify-center">
        <div className="w-8 h-8 mr-6">
          <button
            onClick={() => {
              handleChange("en");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={eng} alt="" />
          </button>
        </div>

        <div className="w-8 h-8 ml-6">
          <button
            onClick={() => {
              handleChange("sr");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={ser2} alt="" />
          </button>
        </div>
      </section>

      {/* social links and contacts section */}
      <div className="flex justify-center mt-12">
        <span className="flex">
          <span className="mr-8">
            <Link to="https://www.facebook.com">
              <FaFacebook className="w-8 h-8" />
            </Link>
          </span>
          <span className="mr-8">
            <Link to="https://www.instagram.com">
              <FaInstagram className="w-8 h-8" />
            </Link>
          </span>
          <span>
            <Link to="https://www.twitter.com">
              <FaTwitter className="w-8 h-8" />
            </Link>
          </span>
        </span>
      </div>
    </aside>
  );
};

export default withTranslation()(Sidebar);
