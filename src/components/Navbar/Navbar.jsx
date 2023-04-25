import { Outlet, Link } from "react-router-dom";
import CartWidgetConteiner from "../CartWidget/CartWidgetConteiner";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link className={styles.logoNav} to="/">
          <h1 >DonGatoBooks</h1>
        </Link>

        <ul className={styles.containerUl}>
          <Link to="/" className={styles.itemNav}>All</Link>
          <Link to="category/terror" className={styles.itemNav}>Terror</Link>
          <Link to="category/fantasy"className={styles.itemNav}>Fantasy</Link>
        </ul>

        <CartWidgetConteiner />
      </div>
      <Outlet />
    </>
  );
};
