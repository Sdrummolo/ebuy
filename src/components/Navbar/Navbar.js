import React from "react"
import Cart from "./Cart/Cart"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className={styles.navbarContainer}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.cartContainer}>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
