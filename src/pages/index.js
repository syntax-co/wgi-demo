import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimatePresence, delay, motion, useInView } from "framer-motion";
import Reviewtile from "./components/review-tile";
import Openhours from "./components/open-hours";





export default function Home() {

  const hourDetails = {
    'Monday':'Closed',
    'Tuesday':'1-10 pm',
    'Wednesday':'1-10 pm',
    'Thursday':'1-10 pm',
    'Friday':'1-10 pm',
    'Saturday':'1-10 pm',
    'Sunday':'1-8 pm',
  }


  const player = useRef(null)

  const girlOne = useRef(null)
  const girlTwo = useRef(null)
  const hoursContainer = useRef(null)

  const inView1 = useInView(girlOne,{once:true,amount:.5})
  const inView2 = useInView(girlTwo,{once:true,amount:.5})
  const inView3 = useInView(hoursContainer,{once:true,amount:.5})
  

  return (
    <motion.div className=" homepage-main-body page-padding"
    
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        duration:.5,
        delay:.5
      }
    }}
    exit={{
      opacity:0
    }}
    >
      {/*       
      ███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗     ██╗
      ██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ███║
      ███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║    ╚██║
      ╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║     ██║
      ███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║     ██║
      ╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═╝ 
      */}
                                                                     
      <div className="section-1-body"
      >
        <div className="w-full h-5/6 bg-pink rounded-2xl relative
        flex items-center justify-center"
        style={{
          boxShadow:'inset 2px 2px 5px #4d4d4d'
        }}
        >

          <div className="section-1-inner-content"
          >
            {/* top title */}
            <div className="w-full h-1/3 bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage:'url(./images/tattoos-piercings.png)'
            }}
            />
            {/* animated svg */}
            <div
            onClick={() => {
              player.current.play()
            }}
            >
              <Player
              ref={player}
              autoplay 
              src='./misc-files/eye-moving.json'
              />
            </div>

            
            {/* bottom display */}
            <div className="w-full h-1/3 bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage:'url(./images/tattoo-studio.png)'
            }}
            />

          </div>

          {/* backgorund */}
          <div className="w-full h-full flex items-center justify-center relative "
          style={{
            backgroundImage:'url(./images/shroom-tiling.png)',
            opacity:.2
          }}
          >

            <div className="w-full h-full "
            style={{
              backgroundImage:'linear-gradient(90deg, #ffd9e7ff 20%,#ffd9e700,#ffd9e7ff 80%)'
            }}
            />
          </div>

          

        </div>
      </div>


      


      {/*       
      ███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ██████╗ 
      ██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ╚════██╗
      ███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║     █████╔╝
      ╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║    ██╔═══╝ 
      ███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║    ███████╗
      ╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝
      */}
      <div className="section-2-body"
      >

        <div className="section-2-left-panel"
        >
          
          
          <motion.div ref={girlOne} className="w-[130%] h-full relative bg-contain bg-center bg-no-repeat
            left-[-30%]"
            
            style={{
              backgroundImage:"url(./images/melting-girl.png)"
            }}
            
            initial={{opacity:0}}
            animate={{
              opacity:inView1?1:0,
              transition:{
                duration:1
              }
            }}

          />

          
        </div>

        <div className="section-2-right-panel"
        >

            <div className="w-5/6 h-full flex flex-col justify-center
            relative"
            >

              <div className="mb-8 text-3xl font-display"
              >Reviews</div>  
              
              <AnimatePresence >
                <Reviewtile key={'review-tile-1'}
                _stars={5}
                data={{
                  name:'Whitney roberts',
                  text:"The vibe in here is SO different from that!!! It's safe, welcoming, warm, and feels like if Barbie World had a tattoo shop",
                  delay:.25
                }}
                />

                <Reviewtile key={'review-tile-2'}
                color='#FFD9E7'
                _stars={5}
                data={{
                  name:'cortny T',
                  text:"My session with Kat this past week was better than I could have expected!",
                  delay:.35
                }}
                />

                <Reviewtile key={'review-tile-3'}
                _stars={5}
                data={{
                  name:'Casey Williams',
                  text:"From the moment I stepped in, I felt welcomed by their warm and quirky atmosphere",
                  delay:.45
                }}
                />
              </AnimatePresence>
              


            </div>

        </div>
        
        
        

      </div>

      {/*       
      ███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ██████╗ 
      ██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ╚════██╗
      ███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║     █████╔╝
      ╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║     ╚═══██╗
      ███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║    ██████╔╝
      ╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ 
       */}
      <div className="section-3-body"
      >

        <div className="section-3-left-panel shadow-1"
        >

          <div className="s3-left-panel-inner"
          >
            <motion.div className="text-3xl font-display px-2"
            initial={{opacity:0}}
            animate={{
              opacity:inView3?1:0,
              transition:{
                duration:.5
              }
            }}
            >Hours</motion.div>

            <motion.div className="w-full h-[5px] mb-8 rounded-full bg-dark" 
            initial={{opacity:0}}
            animate={{
              opacity:inView3?1:0,
              transition:{
                duration:.5
              }
            }}
            />

            <div ref={hoursContainer} className="flex-1 flex flex-col"
            >

              {
                Object.keys(hourDetails).map((key,dex) => {
                  
                  return(
                    <Openhours key={key}
                    inView={inView3}
                    data={{
                      day:key,
                      hours:hourDetails[key],
                      dex:dex
                    }}
                    />
                  )
                })
              }

            </div>

          </div>

        </div>

        <div className="section-3-right-panel"
        >

            <motion.div ref={girlTwo} className="w-[130%]  h-full absolute bg-contain bg-center bg-no-repeat
            left-[0%]"
            style={{
              backgroundImage:"url(./images/water-girl-one.png)"
            }}
            
            initial={{
              opacity:0
            }}
            animate={{
              opacity:inView2?1:0,
              transition:{
                duration:1
              }
            }}

            />

        </div>
        
        
        

      </div>

    </motion.div>
  );
}
