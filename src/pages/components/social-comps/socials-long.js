import { FaFacebookF, FaInstagram } from "react-icons/fa";

const SocialsLong = ({shadow=true}) => {
    return (
        <div className="w-full h-full my-auto
        flex"
        >

            <div className="w-[48%] h-full rounded-2xl
            flex items-center justify-center
            cursor-pointer py-2"
            style={{
                background:'linear-gradient(-45deg,#833AB4,#FD1D1D,#FCB045 110%)',
                boxShadow:shadow? '2px 2px 2px #8d8d8d':'2px 2px 2px #8d8d8d00'
            }}

            onClick={() => {
                document.location.href = 'https://www.instagram.com/weirdgirlinkchicago/'
            }}
            >
                <FaInstagram 
                size={40}
                color="white"
                />
            </div>

            <div className="w-[48%] h-full rounded-2xl bg-[#316FF6]
            ml-auto flex items-center justify-center button-shadow
            cursor-pointer"
            style={{
                boxShadow:shadow? '2px 2px 2px #8d8d8d':'2px 2px 2px #8d8d8d00'
            }}

            onClick={() => {
                document.location.href = 'https://www.facebook.com/weirdgirlink'
            }}
            >
                <FaFacebookF 
                size={35}
                color="white"
                />
            </div>

        </div>
    );
}
 
export default SocialsLong;