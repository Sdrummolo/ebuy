import React, { useContext } from "react"
import EbuyContext from "../../../context/ebuyContext"

import styles from "./Cart.module.css"

const Cart = () => {
  const { cart } = useContext(EbuyContext)

  const totPrice = cart.reduce((a, b) => {
    return a + Number(b.sellingStatus[0].currentPrice[0]["__value__"])
  }, 0)

  return (
    <>
      <div className={styles.cart}>
        <i className="fas fa-shopping-cart fa-2x"></i>
        <div className={styles.quantity}>
          <p>{cart.length}</p>
        </div>
      </div>
      <h4 className={styles.price}>$ {totPrice.toFixed(2)}</h4>
    </>
  )
}

export default Cart
