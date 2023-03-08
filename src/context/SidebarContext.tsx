import React, { useState, useContext } from "react";

// type for the states and functions the Context will provide
export type SidebarContextType = {
  sidebarStatus: string;
  setSidebarStatus: (sidebarStatus: string) => void;
  rotateMenuButton: string;
  setRotateMenuButton: (rotateMenuButton: string) => void;
  rotateSidebarButton: string;
  setRotateSidebarButton: (rotateSidebarButton: string) => void;
};

// type for the children prop
type Props = {
  children: React.ReactNode;
};

// set UserContext to null
export const SidebarContext = React.createContext<SidebarContextType | null>(
  null
);

const SidebarProvider = ({ children }: Props) => {
  const [sidebarStatus, setSidebarStatus] = useState<string>("hidden");
  const [rotateMenuButton, setRotateMenuButton] = useState<string>("");
  const [rotateSidebarButton, setRotateSidebarButton] = useState<string>("");

  return (
    <SidebarContext.Provider
      value={{
        sidebarStatus,
        setSidebarStatus,
        rotateMenuButton,
        setRotateMenuButton,
        rotateSidebarButton,
        setRotateSidebarButton,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

// custom hook function
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
