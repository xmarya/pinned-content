import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useActiveIndexContext } from "../hooks/useActiveIndex";

type Props = {
  children: React.ReactNode,
  index: number,
  // targetRef: React.RefObject<HTMLDivElement | null>
};

export default function Description({ index, children }: Props) {
  const { setActiveIndex } = useActiveIndexContext();

  const inViewRef = useRef<HTMLLIElement>(null);

  const isInView = useInView(inViewRef, {amount: 0.25});


  useEffect(() => {
    console.log("render Paragraphs", index);
    if( !isInView ) return;
    setActiveIndex(index);
    console.log("render inView", index, isInView);

  }, [isInView, index, setActiveIndex]);

  return (
    <motion.li
    // BUG: the .white-text is not being applied, why !?
      className={isInView ? "white-text" : ""}
      ref={inViewRef}
    >
      {children}
    </motion.li>
  );
}
