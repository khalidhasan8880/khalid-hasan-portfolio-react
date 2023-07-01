import { motion } from 'framer-motion';
import './backdrop.css'
const Backdrop = ({children,onclick}) => {
    
    return (
        <motion.div onClick={onclick} className="fixed w-full h-screen backdrop backdrop-blur-xl top-0 left-0 z-20 flex-center"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;