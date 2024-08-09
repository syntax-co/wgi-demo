import React, { useState } from 'react';

import {FiMapPin } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import AboutContent from './about-content';
import MapComponent from '../map';
import GetDirections from './direction-button';




const Tab = ({name,tab,setTab,icon}) => {
    
    return(
        <div className='tab-body'

        style={{
            color:tab==name? '#D9E7FF':'#888888'
        }}
        >
            <button id='at-1' className='about-tab-text'
            onClick={() => setTab(name)
    
            }>{icon&&icon}</button>

            
        </div>
    )
}




const AboutMobile = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [showDir,setShowDir] = useState(false)
  
    const switchtab = (_tab) => {

        if (_tab == 'location') {
            setShowDir(true)
        } else {
            setShowDir(false)
        }

        setActiveTab(_tab)
    }

    return (
        <div className='about-mobile-body shadow-1'
        >

            <div className="about-content-holder">
                {
                    activeTab=='about'?
                    <AboutContent />:
                    activeTab=='location'?
                    <MapComponent />:''
                }

                <GetDirections 
                showDir={showDir}
                />
            </div>

            <div className="about-tab-holder font-display">
                
                
                <Tab
                name={'about'}
                tab={activeTab}
                setTab={switchtab}
                icon={
                    <IoMdInformationCircleOutline 
                    size={35}
                    />
                }
                />
                
                <Tab 
                name={'location'}
                tab={activeTab}
                setTab={switchtab}
                icon={
                    <FiMapPin 
                    size={30}
                    />
                }
                />

                

                
                
            </div>
        
        </div>
    );
};

export default AboutMobile;
