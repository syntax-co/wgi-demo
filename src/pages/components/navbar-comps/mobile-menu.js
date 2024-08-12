import { AnimatePresence, motion } from "framer-motion";
import MenuGradient from "./mobile-menu-gradient";
import MenuIvory from "./mobile-menu-ivory";




const MobileMenu = ({open,setOpen}) => {
    return (
        <motion.div className="h-screen w-full  absolute z-[11]"
        
        initial={{right:'-100%'}}
        animate={{
            right:open?'0%':'-100%'
        }}
        >
            
                <MenuGradient key={'menu-grad'}
                open={open}
                setOpen={setOpen}
                />

                {/* <MenuIvory key={'menu-ivory'}
                setOpen={setOpen}
                /> */}


        </motion.div>
    );
}
 
export default MobileMenu;