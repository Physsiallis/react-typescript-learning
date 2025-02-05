import { useRef, useState } from "react";

import styles from "./TaskPage.module.css";


const TasksPage = () => {

    /**
     * TODO Déclaration d'un état permettant de stocker la liste des tâches.
     */

    const [tasks, setTasks] = useState<string[]>([]);

    /**
     * Référence vers l'input (élément du DOM). Permet de retrouver ce que l'utilisateur a saisi.
     */
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Fonction qui sera appelée en cas de clic pour ajouter un élément.
     *
     * Il est possible de NE PAS passer en paramètre event: React.MouseEvent<HTMLButtonElement>
     */
    function handleAddClick() {
        console.log("Contenu de l'input :" + inputRef.current?.value);
        if(inputRef.current?.value){
            const newTask = inputRef.current.value;
            setTasks((prevTasks) => [...prevTasks, newTask]);
            inputRef.current.value = "";
        }
        // ajouter la valeur de l'input à la liste des tâches
    }

    /**
     * TODO fonction permettant de supprimer toutes les tâches
     */
    function handleClearClick() {
        setTasks([]);
    }

    return (
        <>
            <h2>Liste de tâches :</h2>
            <input ref={inputRef} />
            <button onClick={handleAddClick}>Ajouter</button>
            <button onClick={handleClearClick}>Tout supprimer</button>
            <ul className={ styles.task }>
                {
                    // TODO ajouter un "map" sur le tableau de states en état afin de créer le JSX de chaque tâche
                    // Exemple d'utilisation : https://legacy.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components
                }
            </ul>
        </>
    )
}

export default TasksPage;