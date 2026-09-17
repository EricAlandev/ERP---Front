
import { motion } from "framer-motion";

type MotionComponent = {
    children: React.ReactNode;
}

export default function Motion({children} : MotionComponent){

    return(
        <motion.div
            initial={{x: 50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: 50, opacity: 0}}
        >
            {children}
        </motion.div>
    )
}