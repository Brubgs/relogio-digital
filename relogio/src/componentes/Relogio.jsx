import React, {useState, useEffect} from 'react'

function Relogio() {

    const[tempo, setTempo] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTempo(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    },[])

    return(
        <>
            <div className="containerRelogio">
                <div className="relogio">
                    <span>00:00:00</span>
                </div>
            </div>
        </>
    )
}

export default Relogio