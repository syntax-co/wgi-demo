import { motion } from "framer-motion";
import { FaDirections } from "react-icons/fa";



const GetDirections = ({showDir,_motion=true}) => {


    const loc = {
        lat: 42.00770056437709,
        lng: -87.66753522008673
    }

    const handleOpenMap = () => {
        const url = generateMapUrl(loc.lat, loc.lng);
    
        window.open(url, '_blank');
      };
    
      const generateMapUrl = (lat, lng) => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const isAndroid = /android/i.test(navigator.userAgent);
    
        if (isIOS) {
          return `maps://maps.apple.com/?q=${loc.lat},${loc.lng}`;
        } else if (isAndroid) {
          return `geo:${loc.lat},${loc.lng}`;
        } else {
          return `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
        }
      };

    return(
        <motion.div className='px-1 py-1  rounded-lg
        bottom-3'

        style={{
            position:_motion? 'absolute':'static',
            backgroundColor:_motion? '#2D2C6C':'transparent'
        }}

        initial={{left:_motion?'-50px':'0px'}}
        animate={{
            left:showDir? '5px':'-50px'
        }}

        onClick={() => {handleOpenMap()}}
        >
            <FaDirections 
            size={35}
            color={
                !_motion? '#2D2C6C':'white'
            }
            />
        </motion.div>
    )
}


export default GetDirections;