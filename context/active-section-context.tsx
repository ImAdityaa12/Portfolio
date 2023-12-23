"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
export function useActiveContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveContext must be used within and ActiveSelectionContextProvider"
    );
  }
  return context;
}