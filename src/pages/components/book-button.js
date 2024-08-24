import { SlCalender } from "react-icons/sl";


const BookButton = () => {
    return (
        <div className="bb-1 button-shadow font-display"

        onClick={() => {
            window.location.href='https://www.vagaro.com/weirdgirlinkllc1/staff'
        }}
        >
            <SlCalender 
            size={30}
            color="2D2C6C"
            />
        </div>
    );
}
 
export default BookButton;