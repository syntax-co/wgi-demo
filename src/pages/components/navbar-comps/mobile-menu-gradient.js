import { CgCloseO } from "react-icons/cg";
import navoptions from "@/json-files/site-nav-options.json";
import NavItemMobile from "./nav-item-mobile";
import SocialsLong from "../social-comps/socials-long";
import { AnimatePresence } from "framer-motion";



const MenuGradient = ({setOpen}) => {
    return (
        <div className="w-full h-full flex justify-center pt-[20%] 
        relative overflow-hidden page-padding"
        style={{
            background:'linear-gradient(45deg,#D9E7FF 50%,#FFD9E7)'
        }}
        >
            <div className="w-[170%] aspect-square absolute bg-center 
            bottom-[-45%]"
            style={{
                background:'url(./images/ink-cloud.png)',
                backgroundSize:'contain'
            }}
            />

            <div className="w-full h-4/6 flex flex-col relative"
            >

                <div className="ml-auto mb-10 text-ivory" 
                onClick={() => {
                    setOpen(false)
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
                
                <div className=""
                >
                    <SocialsLong 
                    shadow={false}
                    />
                </div>
            </div>


            
        </div>
    );
}
 
export default MenuGradient;