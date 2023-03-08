import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import { FaTimes } from "react-icons/fa";
import eng from "../assets/eng.png";
import ser2 from "../assets/ser2.png";
import { useSidebarContext } from "../context/SidebarContext";
import { SidebarContextType } from "../context/SidebarContext";

const Sidebar = () => {
  const {
    sidebarStatus,
    setSidebarStatus,
    rotateMenuButton,
    setRotateMenuButton,
    rotateSidebarButton,
    setRotateSidebarButton,
  } = useSidebarContext() as SidebarContextType;

  return (
    <aside
      className={`z-[100] h-full w-full bg-pink-500 absolute top-0 right-0 md:w-8/12 lg:hidden ${
        sidebarStatus === "hidden" ? "translate-x-full" : "translate-x-0"
      } ease-in-out duration-1000`}
    >
      {/* logo and toggle button section */}
      <section>
        <button
          type="button"
          className="lg:hidden float-right"
          onClick={() => {
            setSidebarStatus("hidden");
            setRotateSidebarButton("animate-[spin_0.4s_1]");
            setRotateMenuButton("");
          }}
        >
          <FaTimes className={`fill-sky-900 h-8 w-8 ${rotateSidebarButton}`} />
        </button>
      </section>

      {/* links section */}

      {/* language buttons section */}
    </aside>
  );
};

export default Sidebar;
