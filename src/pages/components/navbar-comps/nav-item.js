import { motion } from "framer-motion";
import { useState } from "react";




const Navitem = ({label,router,path,location,getLoc}) => {
    
    const [hovering,setHovering] = useState(false);
    
    

    return(
        <div className="h-full mx-1 px-4 flex items-center justify-center 
        font-display cursor-pointer relative"
        
        onMouseEnter={() => {setHovering(true)}}
        onMouseLeave={() => {setHovering(false)}}

        onClick={() => {
            router.push(path);
        }}

        >

            

            <motion.div className="w-full absolute top-0 rounded-b-md bg-blue"

            initial={{height:'0%'}}
            animate={{
                height:hovering||location==path? '100%':'0%'
            }}
            />

            <div className="relative text-base"
            >
                {label}
            </div>

        </div>
    )
}



export default Navitem;