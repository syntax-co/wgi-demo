import { AnimatePresence, motion } from "framer-motion";
import ArtistTile from "./components/artist-tile";
import { useEffect, useState } from "react";
import ArtistWork from "./components/artists-work";







const Artistspage = () => {

    const artistdata = {
        'artists-1':{
            'name':'Cutie Magee 1',
            'image':'./images/person-1.jpg',
            'text':'./texts/text-placeholder-1.txt',
            'bookinglink':''
        },
        'artists-2':{
            'name':'Cutie Magee 2',
            'image':'./images/person-2.jpg',
            'text':'./texts/text-placeholder-1.txt',
            'bookinglink':''
        },
        'artists-3':{
            'name':'Cutie Magee 3',
            'image':'./images/person-3.jpg',
            'text':'./texts/text-placeholder-1.txt',
            'bookinglink':''
        },
        'artists-4':{
            'name':'Cutie Magee 4',
            'image':'./images/person-4.jpg',
            'text':'./texts/text-placeholder-1.txt',
            'bookinglink':''
        },
        'artists-5':{
            'name':'Cutie Magee 5',
            'image':'./images/person-5.jpg',
            'text':'./texts/text-placeholder-1.txt',
            'bookinglink':''
        }
    }


    const [currArtist,setCurrArtist] = useState('none');
    const [artistKey,setArtistKey] = useState('');
    const [viewing,setViewing] = useState(false);
    const [booking,setBooking] = useState(false)

    const changeArtist = (artist) => {

        if (artist!='none') {

            const keys = Object.keys(artistdata);
            var found;
            keys.forEach((item,dex) => {
                const _data = artistdata[item]
                if (artist == _data.name) {
                    found = item
                }
            })
            
            setCurrArtist(artist);
            setArtistKey(found)
            setViewing(true);
        } else {
            setCurrArtist('none');
            setArtistKey('')
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
                    />
                }
                </AnimatePresence>


            </div>

        </motion.div>
    );
}
 
export default Artistspage;