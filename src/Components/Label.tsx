import {motion } from "motion/react";
import { useActiveIndexContext } from "../hooks/useActiveIndex";

type Props = {
    index:number,
    children:React.ReactNode
}

export default function Label({index, children}:Props) {
    const {activeIndex} = useActiveIndexContext();

    return (
        <li>
            <motion.h2 initial={{opacity: 0.3}} animate={activeIndex === index ? {opacity: 1} : "" }>{children}</motion.h2>
        </li>
    )

}

