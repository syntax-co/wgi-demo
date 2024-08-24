import { AnimatePresence, motion } from "framer-motion";
import ArtistTile from "./components/artist-tile";
import { useEffect, useState } from "react";
import ArtistWork from "./components/artists-work";







const Artistspage = () => {

    const artistdata = {
        'Lexi Tatts':{
            'image':'./images/artists/Lexi-Tatts.jpeg',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        },
        'Kat Shroth':{
            'image':'',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        },
        'Vee Baby':{
            'image':'./images/artists/Vee-Baby.jpeg',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        },
        'Squid R':{
            'image':'./images/artists/Squid-R.jpg',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        },
        'Orion Erana':{
            'image':'./images/artists/Orion-Erana.jpg',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        },
        'Chris Moya':{
            'image':'./images/artists/Chris-Moya.jpg',
            'text':'',
            'bookinglink':'https://www.vagaro.com/weirdgirlinkllc1/staff'
        }
    }


    const [currArtist,setCurrArtist] = useState('none');
    const [artistKey,setArtistKey] = useState('');
    const [viewing,setViewing] = useState(false);
    const [booking,setBooking] = useState(false)

    const changeArtist = (artist) => {

        if (artist!='none') {

            // const keys = Object.keys(artistdata);
            // var found;
            // if (keys.includes(artist)) {
            //     found=
            // }
            setCurrArtist(artist);
            setArtistKey(artist)
            setViewing(true);
        } else {
            setCurrArtist('none');
            setArtistKey()
            setViewing(false);
        }
    }
    
    const goBack = () => {
        changeArtist('none')
    }
   

    return (
        <motion.div className="artist-page-main page-padding"

        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:.5,
                delay:.5
            }
        }}
        exit={{opacity:0}}
        >

            <div className="artist-page-inner inset-box"
            style={{
                justifyItems:viewing? 'center':null
            }}
            >

                <AnimatePresence key={'artist-holder-presence'} mode="exit">
                {
                    !viewing&&
                    <motion.div key={'title-header'} 
                    className="artist-page-title font-display"
                    
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                            meet the artists
                    </motion.div>
                }
                
                {
                    !viewing&&
                    <motion.div key={'tile-holder'} id='' 
                    className="artist-tile-holder"
                    
                    initial={{left:'-140%'}}
                    animate={{left:'0%'}}
                    exit={{left:'-140%'}}
                    >
                        
                        <AnimatePresence mode="exit">
                        {
                            Object.keys(artistdata).map((key,dex) => {
                                const _data = artistdata[key]
                                return (
                                    <ArtistTile key={key}
                                    currArtist={currArtist}
                                    changeArtist={changeArtist}
                                    viewing={viewing}
                                    data={{
                                        dex:dex,
                                        aniDelay:.25 + (dex*.25),
                                        name:key,
                                        ..._data
                                    }}
                                    />
                                )
                            })
                        }
                        </AnimatePresence>
                    </motion.div>
                }
                

                {
                    viewing&&
                    <ArtistWork key={'testing-key'}
                    goBack={goBack}
                    data={artistdata[artistKey]}
                    artist={artistKey}
                    />
                }
                </AnimatePresence>


            </div>

        </motion.div>
    );
}
 
export default Artistspage;