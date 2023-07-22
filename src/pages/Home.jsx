import { Popular } from "../components/Popular";
import { NonVeg } from "../components/NonVeg";
import {motion} from 'framer-motion';
import '../index.css';

export function Home() {
    return (
        <motion.div 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Popular />
            <NonVeg />
        </motion.div>
    );
}