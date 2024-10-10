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

    function formataTempo() {
        let horas = tempo.getHours()
        const minutos = tempo.getMinutes()
        const segundos = tempo.getSeconds()
        const m = horas >= 12 ? "PM" : "AM"

        horas = horas % 12 || 12

        return `${zero(horas)}:${zero(minutos)}:${zero(segundos)} ${m}`
    }

    function zero(numero) {
        return (numero < 10 ? "0" : "") + numero
    }

    return(
        <>
            <div className="containerRelogio">
                <div className="relogio">
                    <span>{formataTempo()}</span>
                </div>
            </div>
        </>
    )
}

export default Relogio