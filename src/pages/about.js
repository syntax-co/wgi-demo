import { motion } from "framer-motion";
import { FiCopy,FiMapPin } from "react-icons/fi";
import { FaInstagram,FaFacebookF,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MapComponent from "./components/map";
import SocialsLong from "./components/social-comps/socials-long";



const Aboutpage = () => {

    return (
        <motion.div className="page-padding"

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

                <div className="about-inner-container"
                style={{
                    boxShadow:'inset 2px 2px 5px #4d4d4d',
                    borderRadius:'16px'
                }}
                >

                    
                    <div className="about-left-panel"
                    >

                        <div className="about-container shadow-1"
                        >

                            <div className="font-display text-xl  mt-6"
                            >
                                about
                            </div>

                            <div className="flex-1 flex flex-col font-bold font-primary
                            pb-8"
                            >   
                                <div className="about-text"
                                >
                                We are a Female owned and operated tattoo studio on the north side of Chicago in Rogers Park.
                                </div>

                                <div className="about-text"
                                >
                                At Weird Girl Ink in Rogers Park, Chicago, we specialize in unique, thought-provoking tattoos that celebrate your individuality.
                                </div>
                                <div className="about-text"
                                >
                                Our talented team of artists is passionate about transforming your ideas into stunning works of art, ensuring each piece reflects your personal style.
                                </div>

                            </div>

                        </div>

                        <div className="w-full h-14 bg-ivory rounded-2xl
                        border-2 border-darkBlue 
                        my-auto flex 
                        shadow-1"
                        >
                            <div className="w-12 h-full border-r-2 border-darkBlue
                            flex items-center justify-center"
                            >
                                <FaPhoneAlt 
                                size={25}
                                color="#2D2C6C"
                                />
                            </div>
                            <div className="phonenumber-holder font-display"
                            >
                            +1 (773) 512-3656
                            </div>
                            <div className="w-12 h-full border-l-2 border-darkBlue
                            flex items-center justify-center cursor-pointer"
                            >
                                <FiCopy 
                                size={30}
                                color="#2D2C6C"
                                />
                            </div>
                        </div>

                        <div className="w-full h-14 bg-ivory rounded-2xl
                        border-2 border-darkBlue overflow-hidden shadow-1
                        my-auto flex"
                        >
                            <div className="w-12 h-full border-r-2 border-darkBlue
                            flex items-center justify-center"
                            >
                                <MdEmail 
                                size={30}
                                color="#2D2C6C"
                                />
                            </div>
                            <div className="email-holder font-display"
                            >
                            Lexitatts@weirdgirlink.com
                            </div>
                            <div className="w-12 h-full border-l-2 border-darkBlue
                            flex items-center justify-center cursor-pointer"
                            >
                                <FiCopy 
                                size={30}
                                color="#2D2C6C"
                                />
                            </div>
                        </div>

                        <div >
                            <SocialsLong />
                        </div>

                        


                    </div>

                    <div className="about-right-panel shadow-1"
                    >

                        <div className="w-full h-12 bg-blue flex
                        border-b-2 border-darkBlue
                        "
                        >

                            <div className="w-12 h-12 border-r-2 border-darkBlue
                            flex items-center justify-center"
                            >
                                <FiMapPin 
                                size={30}
                                color="#2D2C6C"
                                />
                            </div>
                            <div className="map-location-text font-primary"
                            >
                            1441 West Morse Avenue , Chicago, IL, United States, Illinois
                            </div>
                            <div className="w-12 h-12 border-l-2 border-darkBlue
                            flex items-center justify-center cursor-pointer"
                            >
                                <FiCopy 
                                size={30}
                                color="#2D2C6C"
                                />
                            </div>

                        </div>

                        <div className="flex-1 "
                        >
                            <MapComponent />
                        </div>


                    </div>


                </div>
            </div>
            
        </motion.div>
    );
}
 
export default Aboutpage;