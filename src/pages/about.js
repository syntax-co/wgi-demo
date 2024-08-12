import { motion } from "framer-motion";
import AboutBrowser from "./components/about-comps/about-display-browser";
import AboutMobile from "./components/about-comps/about-display-mobile";



const Aboutpage = () => {

    return (
        <motion.div className="about-page-main-body page-padding"

        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:.5,
                delay:.5
            }
        }}
        exit={{opacity:0}}
        >
            <div className="w-full h-[80vh] flex items-center justify-center "
            >

                <div className="about-inner-container inset-box"
                style={{
                    borderRadius:'16px'
                }}
                >

                    
                    <AboutBrowser />
                    <AboutMobile />

                </div>
            </div>
            
        </motion.div>
    );
}
 
export default Aboutpage;