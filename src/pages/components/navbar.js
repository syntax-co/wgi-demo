import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import BrowserNav from "./navbar-comps/browser-nav";
import MenuButton from "./navbar-comps/mobile-menu-button";
import navoptions from "@/json-files/site-nav-options.json"







const Navbar = ({open,setOpen}) => {

    

    const pathname = usePathname()
    const router = useRouter()
    const [loc,setLoc] = useState('')

    const getLoc = () => {
        const cloc = window.location.href.split(window.location.origin)[1]
        setLoc(cloc)
    }



    useEffect(() => {
        getLoc()
    }, [pathname]);
    

    return (
        <div className="navbar-main-body page-padding"
        >

            <div className="w-full h-full flex "
            >

                <div className="w-1/2 h-full flex items-center"
                >

                    <img className="h-1/2 object-contain cursor-pointer"
                    
                    src="./images/wgi-logo.png"
                    />

                </div>

                <BrowserNav
                router={router}
                loc={loc}
                getLoc={getLoc}
                options={navoptions}
                />

                <MenuButton
                setOpen={setOpen}
                />

            </div>

        </div>
    );
}
 
export default Navbar;