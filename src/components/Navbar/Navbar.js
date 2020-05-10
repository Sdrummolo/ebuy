import React from "react"
import { Link } from "react-router-dom"
import Cart from "./Cart/Cart"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContainer}>
          <Link to="/">
            <i className="fas fa-home fa-2x"></i>
          </Link>
          <Link to="/cart">
            <div className={styles.cartContainer}>
              <Cart />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
