const { useState, useEffect } = require("react")



const InitialsDisplay = ({name}) => {

    const [initials,setInitials] = useState('')

    const getInitials = () => {
        const sep = name.split(' ')
        var _intials = '';

        if (sep.length>=2) {
            _intials = sep[0][0]+sep[1][0] 
        }

        setInitials(_intials)
    }

    useEffect(() => {
        console.log(name)
        if (name) {
            getInitials()
        }
    }, [name]);

    return(
        <div className="initials-body font-display"
        >
            {initials}
        </div>
    )
}


export default InitialsDisplay;