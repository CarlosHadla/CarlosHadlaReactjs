
import CartWidgetConteiner from "../CartWidget/CartWidgetConteiner"
import styles from"./Navbar.module.css"


export const Navbar = ()=>{

    

    return (
        <div className={styles.containerNavbar}>
           <h1>DonGatoBooks</h1>
            <ul className={styles.containerUl}>
                <li className={styles.itemNav} >Todos</li>
                <li className={styles.itemNav}>Terror</li>
                <li className={styles.itemNav}>Fantasia</li>
            </ul>

            <CartWidgetConteiner/>
        </div>

    )
}