import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BackButton from "./back-button";
import BookButton from "./book-button";
import InitialsDisplay from "./initials-display";


const WorkImage = ({data}) => {

    return(
        <div className="aw-work-image shadow-1"

        style={{
            // marginRight:data.dex%2==0?'auto':null
        }}
        >

        </div>
    )
}


const ArtistWork = ({goBack,data,artist}) => {

    const works = [
        'image-1',
        'image-2',
        'image-3',
        'image-4',
        'image-5',
        'image-6',
        'image-7',
        'image-8',
        'image-9',
        'image-10',
        'image-11'
    ]


    const [text,setText] = useState([])

    const getText = async() => {
        // console.log(data)
        // const response = await(await fetch(data.text)).text()
        // setText(response.split('\n'))
    }
    
    useEffect(() => {
        getText()
        
    }, []);

    return (
        <motion.div key={'artist-work'} 
        className="artist-works-main"

        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:.5
            }
        }}
        exit={{opacity:0}}
        >
            
            

            <div className="aw-left-panel"
            >

                

                
                {
                    (data&&data.image)?
                    <div className="atile-image-works shadow-1"
                    style={{
                        backgroundImage:`url(${data.image})`
                    }}
                    />:
                    <InitialsDisplay 
                    name={artist}
                    />
                }

                <div className="aw-text font-primary"
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

                <div className="browser-back-holder"
                >
                    <BackButton
                    goBack={goBack}
                    />

                    <BookButton />
                </div>

                

            </div>
            
            <div className="aw-seperator" 
            />

            <div className="mobile-bb-holder"
            >
                <div className="w-[75px] aspect-square
                bg-center bg-cover rounded-full ml-10 shadow-1" 
                style={{
                    backgroundImage:`url(${data&&data.image})`
                }}
                />
                
                <div className="h-10 flex items-center ml-auto"
                >
                    <BackButton
                    goBack={goBack}
                    />
                </div>
                <div className="h-10 flex items-center ml-4"
                >

                    <BookButton 
                    />
                </div>
            </div>

            <div className="aw-right-panel"
            >   

                <div className="mb-4 text-2xl font-display"
                >
                    Works
                </div>
                
                <div className="flex-1 flex flex-wrap"
                >
                {
                    works.map((item,dex) => {

                        return(
                            <WorkImage
                            data={{
                                dex:dex
                            }}
                            />
                        )
                    })
                }
                </div>

            </div>

        </motion.div>
    );
}
 
export default ArtistWork;