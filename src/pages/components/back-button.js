import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";



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
                <FaRegArrowAltCircleLeft 
                color="#0A090D"
                size={40}
                />
            </motion.div>
        </div>
    );
}
 
export default BackButton;