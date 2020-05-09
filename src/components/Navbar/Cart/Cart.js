import React, { useContext } from "react"
import EbuyContext from "../../../context/ebuyContext"

import styles from "./Cart.module.css"

const Cart = () => {
  const { totItems } = useContext(EbuyContext)

  return (
    <>
      <div className={styles.cart}>
        <i className="fas fa-shopping-cart fa-2x"></i>
        <div className={styles.quantity}>
          <p>{totItems}</p>
        </div>
      </div>
    </>
  )
}

export default Cart
