import React, { useContext } from "react"
import CartItem from "./CartItem/CartItem"

import EbuyContext from "../../context/ebuyContext"
import styles from "./CartPage.module.css"

const CartPage = () => {
  const { cart, totItems, totPrice } = useContext(EbuyContext)

  const products = cart.map(product => <CartItem product={product} key={product.id} />)

  return (
    <div className={styles.cartPage}>
      <div className={styles.header}>
        <h3>Shopping Basket</h3>
        <p>Price</p>
      </div>

      <div className={styles.products}>{products}</div>

      {cart.length > 0 ? (
        <div className={styles.checkout}>
          <h3>
            Subtotal ({totItems} {totItems === 1 ? "item" : "items"}): €{totPrice.toFixed(2)}
          </h3>
          <button>Proceed to Checkout</button>
        </div>
      ) : (
        <h2 className={styles.emptyCart}>Your cart is empty.</h2>
      )}
    </div>
  )
}

export default CartPage
