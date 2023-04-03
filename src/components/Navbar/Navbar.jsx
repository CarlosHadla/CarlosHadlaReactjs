import { display } from "@mui/system"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"


export const Navbar = ()=>{
    return (
        <div className={styles.containerNavbar}>
           <h1>DonGatoBooks</h1>
            <ul>
                <li>Todos</li>
                <li>Terror</li>
                <li>Fantasia</li>
            </ul>

            <CartWidget/>
        </div>

    )
}