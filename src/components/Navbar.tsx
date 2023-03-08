import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import { FaBars } from "react-icons/fa";
import eng from "../assets/eng.png";
import ser2 from "../assets/ser2.png";
import { useSidebarContext } from "../context/SidebarContext";
import { SidebarContextType } from "../context/SidebarContext";

const Navbar = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18next.changeLanguage(language);
  };

  const {
    sidebarStatus,
    setSidebarStatus,
    rotateMenuButton,
    setRotateMenuButton,
    setRotateSidebarButton,
  } = useSidebarContext() as SidebarContextType;
  console.log(sidebarStatus);

  return (
    <nav className="sticky top-0 flex items-between lg:items-center h-20 w-full bg-sky-900 drop-shadow-2xl">
      {/* content main section */}
      <section className="hidden lg:flex text-white items-center h-full mx-auto">
        {/* logo div */}
        <div className="w-16 mr-72 text-center">
          <NavLink to="/">
            <span className="text-3xl font-bold">S. A.</span>
          </NavLink>
        </div>

        {/* navlinks section */}
        <section className="flex h-full items-center">
          <div className="w-24 group flex-col text-center my-auto">
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
            <div className="w-full py-2 px-auto">
              <NavLink to="/" className="hover:text-yellow-100">
                <span className="text-md font bold">{t("Home")}</span>
              </NavLink>
            </div>
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
          </div>

          <div className="w-24 group flex-col place-content-between text-center">
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
            <div className="w-full py-2 px-auto">
              <NavLink to="/contact" className="hover:text-yellow-100">
                <span className="text-md font bold">{t("Contact")}</span>
              </NavLink>
            </div>
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
          </div>

          <div className="w-24 group flex-col place-content-between text-center">
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
            <div className="w-full py-2 px-auto">
              <NavLink to="/workareas" className="hover:text-yellow-100">
                <span className="text-md font bold">{t("WorkAreas")}</span>
              </NavLink>
            </div>
            <div className="h-[2px] w-full bg-transparent group-hover:bg-white"></div>
          </div>
        </section>

        {/* language buttons section */}
        <section className="flex ml-12 h-full items-center">
          <div className="w-6 mr-4">
            <button
              onClick={() => handleChange("en")}
              className="rounded-full bg-yellow-100 text-black"
            >
              <img src={eng} alt="" />
            </button>
          </div>

          <div className="w-6 mr-4">
            <button
              onClick={() => handleChange("sr")}
              className="rounded-full bg-yellow-100 text-black"
            >
              <img src={ser2} alt="" />
            </button>
          </div>
        </section>
      </section>

      {/*  */}
      {/* small screen content section */}
      {/*  */}

      <section className="flex lg:hidden text-white items-center justify-between px-8 h-full w-full">
        {/* logo div */}
        <div className="w-16 text-center">
          <NavLink to="/">
            <span className="text-3xl font-bold">S. A.</span>
          </NavLink>
        </div>

        {/* sidebar menu button section */}
        <section className="flex h-full items-center">
          <div className="w-6 mr-4">
            <button
              type="button"
              className="p-1 mr-4 lg:hidden"
              onClick={() => {
                setSidebarStatus("block");
                setRotateMenuButton("animate-[spin_0.4s_1]");
                setRotateSidebarButton("");
              }}
            >
              <FaBars className={`fill-white h-8 w-8 ${rotateMenuButton}`} />
            </button>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default withTranslation()(Navbar);
