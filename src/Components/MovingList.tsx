import { motion } from "motion/react";
import { useActiveIndexContext } from "../hooks/useActiveIndex";

type Props = {
    children: React.ReactNode
}

export default function MovingList({children}: Props) {
    const {activeIndex} = useActiveIndexContext();

    return (
        <motion.ul className="label-list" initial={{transform: `translate3d(0, 0, 0)`}} animate={{transform: `translate3d(0, calc(8rem * ${activeIndex} * -1), 0)`}}>
            {children}
        </motion.ul>
    )
}

