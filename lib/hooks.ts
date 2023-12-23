import { useActiveContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useActiveSection(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, lastTimeClicked } = useActiveContext();
  useEffect(() => {
    if (inView && Date.now() - lastTimeClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastTimeClicked, sectionName]);
  return ref;
}
