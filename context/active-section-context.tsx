"use client";

import type { ActiveSectionContextType, SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastTimeClicked, setLastTimeClicked] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastTimeClicked,
        setLastTimeClicked,
      }}
    >
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
