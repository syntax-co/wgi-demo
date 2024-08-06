import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Navitem from "./nav-item";


const BrowserNav = ({router,loc,getLoc,options}) => {
    return (
        <div className="browser-nav-body"
        >
            
            <div className="w-12 h-12 rounded-lg 
            flex items-center justify-center mx-2
            cursor-pointer"
            style={{
                background:'linear-gradient(-45deg,#833AB4,#FD1D1D,#FCB045 110%)'
            }}

            onClick={() => {
                document.location.href = 'https://www.instagram.com/weirdgirlinkchicago/'
            }}
            >
                <FaInstagram 
                size={35}
                color="white"
                />
            </div>
            
            <div className="w-12 h-12 rounded-lg bg-[#316FF6]
            flex items-center justify-center mx-2
            cursor-pointer"

            onClick={() => {
                document.location.href = 'https://www.facebook.com/weirdgirlink'
            }}
            >
                <FaFacebookF 
                size={30}
                color="white"
                />
            </div>

            {
                options&&
                Object.keys(options).map((key,dex) => {


                    return(
                        <Navitem key={key}
                        label={key}
                        path={options[key].path}
                        router={router}
                        location={loc}
                        getLoc={getLoc}
                        />
                    )
                })
            }

        </div>
    );
}
 
export default BrowserNav;