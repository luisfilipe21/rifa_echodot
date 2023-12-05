import { useEffect, useState, useRef } from "react";
import style from "./style.module.scss";

export const Header = () => {

    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [secs, setSecs] = useState("00")

    let interval = useRef()

    const setTimer = () => {
        const countDownDate = new Date("Dec 31, 2023 20:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            let daysC = Math.floor(distance / (1000 * 60 * 60 * 24))
            let hoursC = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            let minutesC = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let secsC = Math.floor((distance % (1000 * 60)) / 1000);

            if(daysC < 10) daysC = "0" + daysC;
            if(hoursC < 10) hoursC = "0" + hoursC;
            if(minutesC < 10) minutesC = "0" + minutesC
            

            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setDays(daysC)
                setHours(hoursC)
                setMinutes(minutesC)
                setSecs(secsC)
            }
        })
    }

    useEffect(() => {
        setTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <header>
            <div className={style.intro}>
                <h1>Olha a rifa de natal aí, gente!</h1>
                <p>
                    O ano novo está quase aí e que tal começar 2024 com uma assistente virtual que te ajude com as tarefas do dia a dia, que toque suas músicas favoritas, que controle seus dispositivos inteligentes e que ainda te divirta com piadas e curiosidades?
                </p>
                <p>
                    Então você não pode perder a chance de participar da rifa de uma Echo Dot 5ª geração, a famosa "Alexa" (assistente pessoal da Amazon)!
                </p>

            </div>
            
            <div className={style.watch}>
                <div className={style.watchBox}>
                    <p>{days}</p>
                    <span>Dais</span>
                </div>
                <div className={style.watchBox}>
                    <p>{hours}</p>
                    <span>Horas</span>
                </div>
                <div className={style.watchBox}>
                    <p>{minutes}</p>
                    <span>Minutos</span>
                </div>
                <div className={style.watchBox}>
                    <p>{secs}</p>
                    <span>Segundos</span>
                </div>
            </div>
        </header>
    )
}