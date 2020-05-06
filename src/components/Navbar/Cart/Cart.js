import React, { useContext } from "react"
import EbuyContext from "../../../context/ebuyContext"
import PropTypes from "prop-types"

import styles from "./Cart.module.css"

const Cart = () => {
  const { cart } = useContext(EbuyContext)

  return (
    <>
      <div className={styles.cart}>
        <i class="fas fa-shopping-cart fa-2x"></i>
        <div className={styles.quantity}>
          <p>{cart.length}</p>
        </div>
      </div>
      <h4 className={styles.price}>$0.00</h4>
    </>
  )
}

Cart.propTypes = {}

export default Cart
