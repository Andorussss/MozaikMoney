import React, {useEffect, useRef, useState} from 'react'
import VantaNet from "vanta/src/vanta.net";

const NetBackground = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(VantaNet({
                el: myRef.current,
                color: 0xff0077,
                backgroundColor: 0x000000,
                maxDistance: 24.0,
                spacing: 10.0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    console.log(myRef)
    return (<div ref={myRef}
                 style={{
                     position: "fixed",
                     top: 0,
                     left: 0,
                     width: "100vw",
                     height: "100vh",
                     zIndex: -1
                 }}>
    </div>)
}

export default NetBackground;