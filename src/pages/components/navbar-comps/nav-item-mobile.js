import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Pace, Pause, WindupChildren } from "windups";



const NavItemMobile = ({label,path,gradient=false,setOpen}) => {

    const router = useRouter()
    


    return (
        <motion.div className=" text-5xl font-display mb-auto"

        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:.5
            }
        }}
        exit={{opacity:0}}

        onClick={() => {
            setOpen(false);
            setTimeout(() => {
                router.push(path)
            }, 750);
        }}
        >
                <div className="w-fit "
                >
                    <WindupChildren >
                        <Pause ms={1000} />
                        <Pace ms={300}>
                            {label}
                        </Pace>
                        {/* <Pause ms={2000} /> */}
                    </WindupChildren>
                </div>

            <motion.div className="w-full h-1 bg-ivory"
            style={{
                backgroundImage:gradient? 'linear-gradient(45deg,#D9E7FF 50%,#FFD9E7)':null,
                backgroundColor:!gradient? '#FFFFF0':null,
                

            }}

            initial={{width:'0%'}}
            animate={{
                width:'100%',
                transition:{
                    duration:.5,
                    delay:.75
                }
            }}

            />

        </motion.div>
    );
}
 
export default NavItemMobile;