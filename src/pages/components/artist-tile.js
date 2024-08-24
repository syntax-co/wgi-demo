import {motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import InitialsDisplay from "./initials-display";




const ArtistTile = ({viewing,currArtist,dex,changeArtist,data}) => {

    const anim = useAnimationControls()
    const [text,setText] = useState([])

    const getText = async() => {
        if (data.text) {
            const response = await(await fetch(data.text)).text()
            setText(response.split('\n'))
        }
    }

    const fadein = () => {
        anim.start({
            opacity:1,
            transition:{
                delay:data.aniDelay
            }
        })
    }

    const fadeout = () => {
        anim.start({
            opacity:0,
            transition:{
                duration:.4
            }
        })

    }

    

    




    useEffect(() => {
        fadein()
        getText()
    }, [viewing]);

    return (
        <motion.div id={'tile-'+dex&&dex} className="artist-tile-main-body shadow-1"
        style={{
            marginRight:dex&&(dex%2==0? 'auto':''),
            right:viewing? 0:null
        }}

        initial={{opacity:0}}
        animate={anim}

        whileHover={{
            scale:!viewing? 1.05:1
        }}
        >

            <div className="atile-image-holder"
            >
                {
                    (data&&data.image)?
                    <div className="atile-image shadow-1"
                    style={{
                        backgroundImage:`url(${data.image})`
                    }}
                    />:
                    <InitialsDisplay 
                    name={data.name}
                    />
                }
            </div>


            <div className="atile-content-holder"
            >

                <div className="text-2xl font-primary pt-6 "
                >
                    {data&&data.name}
                </div>

                <div className="atile-text font-secondary"
                >
                    {
                        text&&
                        text.map((item,dex) => {
                            var size = text.length

                            if (dex<size-1) {
                                return(
                                    <div key={'text-'+data.name+'-'+dex}>
                                        {item}
                                        <br />
                                    </div>
                                    
                                )
                            } else {
                                return(
                                    <div key={'text-'+data.name+'-'+dex}>
                                        {item}
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="h-14 w-full mb-4 flex items-center justify-end
                font-primary text-lg"
                >

                    <div className="w-[75px] flex items-center justify-center bg-blue rounded md
                    py-1 mr-2 cursor-pointer button-shadow"

                    onClick={() => {
                        changeArtist(data.name?data.name:'none')
                    }}
                    >
                        Works
                    </div>

                    <div className="w-[75px] flex items-center justify-center bg-pink rounded md
                    py-1 mr-2 cursor-pointer button-shadow"
                    
                    onClick={() => {
                        window.location.href = data.bookinglink
                    }}
                    >
                        Book
                    </div>

                </div>

            </div>


        </motion.div>
    );
}
 
export default ArtistTile;