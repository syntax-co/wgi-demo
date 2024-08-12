import servicedata from '@/json-files/services-data.json'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


const ServiceTitle = ({title}) => {

    return(
        <div className='serv-title-body shadow-1 font-display'
        >
            {title&&title}
            <div className='w-full h-1 bg-black' 
            
            />
        </div>
    )
}

const ServiceItem = ({data}) => {

    return(
        <div className='service-item-body '
        >   
            <div className='mb-2 flex '
            >
                <div className='sitem-title font-display'
                >
                    {data&&data.name}
                </div>

                <div className='sitem-price font-primary'
                >
                    {data&&data.price}
                </div>
            </div>

            <div className='sitem-descr font-primary'
            >
                {data&&data.description}
            </div>
        </div>
    )
}


const ServicePanel = ({data}) => {


    useEffect(() => {
        console.log(data)
    }, []);

    return(
        <div className='serv-panel-body'
        >
            <ServiceTitle 
            title={data&&data.serviceName}
            />

            <div className='service-holder shadow-1'
            >
                {
                    data&&
                    servicedata[data.serviceName].map((item,dex) => {

                        return(
                            <ServiceItem key={item.name} 
                            data={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


const ServicesPage = () => {
    const [servNames,setServNames] = useState(Object.keys(servicedata))

    


    return (
        <motion.div className="page-main-body page-padding"

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

            <motion.div className="services-inner-container inset-box"
            >

                {
                    servNames.map((name,dex) => {
                        const _data = servicedata[name]
                        return(
                            <ServicePanel 
                            data={{
                                'serviceName':name,
                                ... _data
                            }}
                            />
                        )
                    })
                }

                


            </motion.div>

        </motion.div>
    );
}
 
export default ServicesPage;