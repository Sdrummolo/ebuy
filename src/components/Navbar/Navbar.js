import React from "react"
import { Link } from "react-router-dom"
import Cart from "./Cart/Cart"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className={styles.navbarContainer}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
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
