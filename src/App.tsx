import { useRef } from "react";
import Description from "./Components/Description";
import Label from "./Components/Label";
import MovingList from "./Components/MovingList";
import { stickyData } from "./data/stickyData";
import { ActiveIndexProvider } from "./hooks/useActiveIndex";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: scrollRef});
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-99%"]);

  return (
    <>
      <div className="half-vp" />
      <ActiveIndexProvider>
        <div ref={scrollRef} className="wrapper">

          <div className="sticky-side">
            <MovingList>
              {stickyData.map((data, index) => (
                <Label key={index} index={index}>
                  {data.title}
                </Label>
              ))}
            </MovingList>
          </div>

          <div className="sticky-side">
            <motion.ul className="description-list" style={{x}}>
              {stickyData.map((data, index) => (
                <Description key={index} index={index}>
                  <p>{data.description}</p>
                </Description>
              ))}
            </motion.ul>
          </div>

        </div>
      </ActiveIndexProvider>
      <div className="full-vp" />
    </>
  );
}
