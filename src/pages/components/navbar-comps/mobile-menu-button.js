import { HiOutlineMenuAlt3 } from "react-icons/hi";



const MenuButton = ({setOpen}) => {
    return (
        <div className="mobile-nav-body "
        >

            <div className=" flex items-center justify-center"

            onClick={() => {setOpen(true)}}
            >
                <HiOutlineMenuAlt3 
                size={40}

                />
            </div>

        </div>
    );
}
 
export default MenuButton;