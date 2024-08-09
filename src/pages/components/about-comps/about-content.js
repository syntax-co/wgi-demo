import {FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCopy} from "react-icons/fi";
import SocialsLong from "../social-comps/socials-long";


const AboutContent = () => {
    return (
        <div className="h-full w-full flex flex-col px-4"
            >

            <div className="flex-1 w-full"
            >

                <div className="font-display text-xl  mt-6 mb-6"
                >
                    about
                </div>

                <div className="flex-1 flex flex-col font-bold font-primary
                pb-8 "
                >   
                    <div className="about-content-text"
                    >
                    We are a Female owned and operated tattoo studio on the north side of Chicago in Rogers Park.
                    </div>

                    <div className="about-content-text"
                    >
                    At Weird Girl Ink in Rogers Park, Chicago, we specialize in unique, thought-provoking tattoos that celebrate your individuality.
                    </div>
                    <div className="about-content-text"
                    >
                    Our talented team of artists is passionate about transforming your ideas into stunning works of art, ensuring each piece reflects your personal style.
                    </div>

                </div>

            </div>

            <div className="w-full h-10 bg-ivory rounded-2xl
            border-2 border-darkBlue 
            my-2 flex 
            shadow-1"
            >
                <div className="w-12 h-full border-r-2 border-darkBlue
                flex items-center justify-center"
                >
                    <FaPhoneAlt 
                    size={20}
                    color="#2D2C6C"
                    />
                </div>
                <div className="phonenumber-holder font-display"
                >
                +1 (773) 512-3656
                </div>
                
            </div>

            <div className="w-full h-10 bg-ivory rounded-2xl
            border-2 border-darkBlue overflow-hidden shadow-1
            my-6 flex"
            >
                <div className="w-12 h-full border-r-2 border-darkBlue
                flex items-center justify-center"
                >
                    <MdEmail 
                    size={25}
                    color="#2D2C6C"
                    />
                </div>
                <div className="email-holder font-display"
                >
                Lexitatts@weirdgirlink.com
                </div>
                
            </div>

            
            


        </div>
        
    );
}
 
export default AboutContent;