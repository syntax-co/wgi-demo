import { useRouter } from "next/router";



const NavItemMobile = ({label,path,gradient=false,setOpen}) => {

    const router = useRouter()



    return (
        <div className=" text-5xl font-display mb-auto"

        onClick={() => {
            setOpen(false);
            setTimeout(() => {
                router.push(path)
            }, 750);
        }}
        >
            <div className="w-fit "
            >
                {label&&label}
            </div>
            <div className="w-full h-1 bg-ivory"
            style={{
                backgroundImage:gradient? 'linear-gradient(45deg,#D9E7FF 50%,#FFD9E7)':null,
                backgroundColor:!gradient? '#FFFFF0':null,
                

            }}
            />

        </div>
    );
}
 
export default NavItemMobile;