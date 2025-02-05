import { useState } from "react";

const CounterPage = () => {
    /**
     * TODO Déclaration de l'état stockant la valeur du compteur
     *
     * Plus d'information sur la déclaration des useState : https://www.carlrippon.com/typed-usestate-with-typescript/
     */

    const [compteur, setCompteur] = useState(0);


    /**
     * TODO implémenter Fonction permettant d'incrémenter l'état du compteur.
     *
     * Utilisée en tant que "handler" d'un évènement "click".
     */

    const incrementer = () => {
        setCompteur(compteur +1);
    }

    /**
     * TODO implémenter un fonction permettant d'incrémenter l'état du compteur
     *
     * Utilisée en tant que "handler" d'un évènement "click".
     */


    /**
     * On renvoie le JSX correspond à ce qui est à afficher
     */
    return (
        <>
            <h2>Compteur : {compteur}</h2>
            {/* TODO compléter le code affichant le nombre de clics et des boutons */}
            <button onClick={incrementer}>+1</button>
        </>
    )
}

export default CounterPage;