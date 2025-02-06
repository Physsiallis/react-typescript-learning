import { useEffect, useRef, useState } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {

    // TODO déclarer un state permettant de stocker la date et l'heure actuelle
    // Indice sur ce qu'il faudrait stocker : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
    const [date, setDate] = useState(new Date);

    const int: any = useRef(null);

    useEffect(() => {
        return () => clearInterval(int.current);
    }, []);

    /**
     * TODO fonction permettant de démarrer l'horloge
     */
    function handleStartClick() {
        int.current = setInterval(() => {
            setDate(new Date)
        }, 1000);
    }


    /**
     * TODO fonction permettant de stopper l'horloge
     */
    function handleStopClick() {
        if (int.current != null) {
            clearInterval(int.current)
        }
    }

    return (
        <div className={styles.clockContainer}>
            <button onClick={handleStartClick}>KING CRIMSON !</button>
            <button onClick={handleStopClick}>ZA WORLDO ! TOKI WO TOMARE !!</button>
            {/* TODO implémenter l'interface graphique de l'horloge */
                date.toLocaleDateString() + " " +
                date.toLocaleTimeString()
            }
        </div>
    );
}

export default ClockPage;