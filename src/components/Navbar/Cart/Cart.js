import React, { useContext } from "react"
import EbuyContext from "../../../context/ebuyContext"

import styles from "./Cart.module.css"

const Cart = () => {
  const { cart } = useContext(EbuyContext)

  return (
    <>
      <div className={styles.cart}>
        <i className="fas fa-shopping-cart fa-2x"></i>
        <div className={styles.quantity}>
          <p>{cart.length}</p>
        </div>
      </div>
      <h4 className={styles.price}>$0.00</h4>
    </>
  )
}

export default Cart
