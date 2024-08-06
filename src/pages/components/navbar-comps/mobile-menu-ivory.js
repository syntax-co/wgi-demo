import { CgCloseO } from "react-icons/cg";

import navoptions from "@/json-files/site-nav-options.json";
import NavItemMobile from "./nav-item-mobile";
import SocialsLong from "../social-comps/socials-long";
import styled from 'styled-components';
import { motion } from "framer-motion";



const MenuIvory = ({setOpen}) => {

    const GradientIconWrapper = styled.div`
                                    display: inline-block;
                                    background: linear-gradient(45deg, #ff6b6b, #f94d6a, #9b5de5, #00bbf9);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    font-size: 3rem; /* Adjust the size as needed */
                                    `;

    return (
        <motion.div className="w-full h-full flex justify-center pt-[20%] 
        relative overflow-hidden page-padding bg-ivory"
        
        >
            <div className="w-[170%] aspect-square absolute bg-center 
            bottom-[-45%]"
            style={{
                background:'url(./images/ink-cloud.png)',
                backgroundSize:'contain'
            }}
            />

            <div className="w-full h-4/6 flex flex-col relative
            "
            >

                <div className="ml-auto mb-10"

                onClick={() => {
                    setOpen(false)
                }}
                >  
                    
                    <div className="w-14 aspect-square bg-center bg-contain" 
                    style={{
                        backgroundImage:'url(./images/gg-close-grad.png)'
                    }}
                    />
                        
                            
                </div>

                <div className="flex-1 flex flex-col text-ivory"
                >
                    {
                        Object.keys(navoptions).map((key,dex) => {

                            return(
                                <NavItemMobile
                                label={key}
                                path={navoptions[key].path}
                                setOpen={setOpen}
                                gradient={true}
                                />
                            )
                        })
                    }
                </div>
                
                <div className=""
                >
                    <SocialsLong 
                    shadow={false}
                    />
                </div>
            </div>


            
        </motion.div>
    );
}
 
export default MenuIvory;