import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import classNames from "classnames";
import { useActiveIndexContext } from "../hooks/useActiveIndex";

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function Description({ index, children }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  /* CHANGE LATER: useScroll instead of  isInView*/
  const isInView = useInView(ref, {amount: 0.6});
  const { setActiveIndex } = useActiveIndexContext();

  useEffect(() => {
    if( isInView ) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      className={classNames("description-list", isInView && "white-text")}
      ref={ref}
    >
      {children}
    </div>
  );
}
