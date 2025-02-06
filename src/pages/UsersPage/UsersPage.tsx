import { useEffect, useState } from "react";
import { User, UserCard } from "../../components/UserCard/UserCard";
// TODO importer les utilisateurs du fichier "/assets/data/users.tsx"
import usersData from "../../assets/data/users";
// TODO ajouter le css modulaire pour cette page
import styles from "./UsersPage.module.css";

const UsersPage = () => {
    // Déclaration d'un state permettant de stocker les utilisateur
    const [users, setUsers] = useState<User[] | []>([]);

    // TODO compléter ce useEffect qui se déclenche à la création du composant
    // Dans un premier temps : complétez le avec le tableau d'utilisateurs provenant du fichier "assets/data/users.tsx"
    //
    // Dans un deuxième temps, ajoutez une requête HTTP pour l'obtention des données
    // Url à utiliser : https://jsonplaceholder.typicode.com/users
    // Tutoriel pouvant vous aider : https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
    useEffect(() => {
        // TODO mise à jour du state
        // setUsers(usersData);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(reponse=>reponse.json())
        .then(data=>setUsers(data))
        
    }, []);

    return (
        <div className={styles.usersContainer}>
            {
                users.map(user =>
                    <UserCard key={user.id} user={user} />
                
                    )
            // TODO faire interface graphique pour la liste des utilisateurs
            // Pour générer les "cards" utilisateur veillez à vous servir du composant "UserCard"
            }
        </div>
        
    );

}

export default UsersPage;