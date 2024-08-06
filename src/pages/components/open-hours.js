import { motion } from "framer-motion";



const Openhours = ({inView,data}) => {

    return(
      <motion.div className="w-full h-fit flex flex-col items-end font-primary px-4 my-auto" 

      initial={{opacity:0}}
      animate={{
        opacity:inView?1:0,
        transition:{
            delay:.2+(.2*(data?data.dex:0))
        }
      }}
      >
        <div className="w-full h-fit flex px-2"
        >
          <div className="text-3xl font-bold"
          >
            {data&&data.day}
          </div>
          
          <div className="text-2xl ml-auto"
          >
            {data&&data.hours}
          </div>
        </div>
  
        <div className="w-full h-[2px] bg-black" 
        />
  
      </motion.div>
    )
  }


export default Openhours;