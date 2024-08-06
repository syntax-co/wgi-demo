import "@/styles/globals.css";
import Navbar from "./components/navbar";
import { AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./components/navbar-comps/mobile-menu";



export default function App({ Component, pageProps }) {

  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen,setMenuOpen] = useState(false)
  
  return (
    <div className="h-screen overflow-x-hidden relative "
    style={{
      overflowY:menuOpen? 'hidden':'scroll'
    }}
    >
      <MobileMenu 
      open={menuOpen}
      setOpen={setMenuOpen}
      />

      <Navbar 
      open={menuOpen}
      setOpen={setMenuOpen}
      />


      <AnimatePresence key={'main-comp-presence'} mode="wait">
        <Component  {...pageProps} key={pathname+'-component'} />
      </AnimatePresence>

    </div>
  ) 
}
