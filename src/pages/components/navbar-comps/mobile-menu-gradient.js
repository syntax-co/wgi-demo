import { CgCloseO } from "react-icons/cg";
import navoptions from "@/json-files/site-nav-options.json";
import NavItemMobile from "./nav-item-mobile";
import SocialsLong from "../social-comps/socials-long";
import { AnimatePresence, motion } from "framer-motion";




const MenuGradient = ({open,setOpen}) => {
    return (
        <div className="w-full h-full flex justify-center pt-[20%] 
        relative overflow-hidden page-padding"
        style={{
            background:'linear-gradient(45deg,#D9E7FF 50%,#FFD9E7)'
        }}
        >
            <motion.div className="w-[170%] aspect-square absolute bg-center 
            "
            style={{
                background:'url(./images/ink-cloud.png)',
                backgroundSize:'contain'
            }}

            initial={{
                opacity:0,
                bottom:'-65%'
            }}
            animate={{
                opacity:open? 1:0,
                bottom:open? '-45%':'-65%',
                transition:{
                    duration:2
                }
            }}
            />

            <div className="w-full h-4/6 flex flex-col relative"
            >

                <div className="ml-auto mb-10 text-ivory" 
                onClick={() => {
                    setOpen(!open)
                }}
                >
                    <CgCloseO 
                    size={40}
                    />
                </div>

                <div className="flex-1 flex flex-col text-ivory"
                >
                    <AnimatePresence >
                        {
                            open&&
                            Object.keys(navoptions).map((key,dex) => {

                                return(
                                    <NavItemMobile key={key}
                                    label={key}
                                    path={navoptions[key].path}
                                    setOpen={setOpen}
                                    />
                                )
                            })
                        }
                    </AnimatePresence>
                </div>
                
                <motion.div className=""

                initial={{opacity:0}}
                animate={{
                    opacity:open? 1:0,
                    transition:{
                        duration:.5,
                        delay:.5
                    }
                }}
                >
                    <SocialsLong 
                    shadow={false}
                    />
                </motion.div>
            </div>


            
        </div>
    );
}
 
export default MenuGradient;