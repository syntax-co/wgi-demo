import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";



const Reviewtile = ({color,_stars,data}) => {

    // Round to nearest half
    const roundedRating = Math.round(_stars * 2) / 2;

    // Calculate number of full, half, and empty stars
    const fullStars = Math.floor(roundedRating);
    const halfStars = roundedRating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const [stars,setStars] = useState([])
    const tileRef = useRef(null)
    const isInView = useInView(tileRef,{once:true})



    const createStars = () => {
        const holder = []    

        for (var i=0; i<fullStars; i++)  {
            holder.push(
                <div>
                    <IoIosStar
                    color="#2D2C6C"
                    className="review-tile-stars"
                    />
                </div>
            )
        }

        for (var i=0; i<halfStars; i++)  {
            holder.push(
                <div>
                    <IoIosStarHalf
                    className="review-tile-stars"
                    />
                </div>
            )
        }

        for (var i=0; i<emptyStars; i++)  {
            holder.push(
                <div>
                    <IoIosStarOutline
                    className="review-tile-stars"
                    />
                </div>
            )
        }
        setStars(holder)

    }

    

    useEffect(() => {
        createStars()
    }, []);

    return (
        <div ref={tileRef} 
        className="review-tile-body"
        >

            <motion.div
            className="review-tile-inner-body"
            

            initial={{
                opacity:0,
                left:'150%'
            }}
            animate={{
                opacity:isInView? 1:0,
                left:isInView?'0%':'150%',
                transition:{
                    duration:.5,
                    delay:data&&data.delay
                }
            }}
            >

                <div className="review-tile-name font-display"
                >
                    {
                        data&&
                        data.name
                    }
                </div>

                <div id='stars' className="my-2 flex" >
                    {
                        stars.map((star,dex) =>{
                            return(
                                <div key={'star-'+dex}>
                                    {star}
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className="review-tile-text font-primary"
                >
                    {
                        data&&
                        data.text
                    }
                </div>

            </motion.div>

        </div>
    );
}
 
export default Reviewtile;