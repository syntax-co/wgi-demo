import { motion } from "framer-motion";
import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";;



const BackButton = ({goBack}) => {

    const [hovering,setHovering] = useState(false)

    return (
        <div className="artist-back-button"
        
        onMouseEnter={() => {setHovering(true)}}
        onMouseLeave={() => {setHovering(false)}}
        onClick={() => {goBack()}}
        >   
            <motion.div className="relative"
            
            animate={{
                translateX:hovering? '-10px':'0px'
            }}
            >
                <IoChevronBack 
                color="white"
                size={35}
                />
            </motion.div>
        </div>
    );
}
 
export default BackButton;