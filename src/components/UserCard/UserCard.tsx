
// TODO import du module CSS propre à ce composant
// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './UserCard.module.css'; // Import css modules stylesheet as styles

// TODO ajouter toutes les interface nécessaire à la représentation des données utilisateur de la web API suivante : https://jsonplaceholder.typicode.com/users
// Plus d'information sur comment faire des objets imbriqués en Typescript : https://www.geeksforgeeks.org/how-to-define-interfaces-for-nested-objects-in-typescript/
export interface Coordinates {
    lat: string,
    lng: string
}

// TODO ajouter les interfaces manquantes

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,

}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Coordinates,
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}
export const UserCard = ({ user }: { user: User }) => {

    return (
        <div className={styles.userCard}>
            {
                <div>
                    {
                        <div>
                            <div> Identifiant : {
                                user.id
                            }
                            </div>
                            <div> Nom : {
                                user.name
                            }
                            </div>
                            <div> Nom d'utilisateur : {
                                user.username
                            }
                            </div>
                            <div> Website : {
                                user.website
                            }
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
