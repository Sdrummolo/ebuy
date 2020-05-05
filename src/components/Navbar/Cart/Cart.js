import React from 'react'
import PropTypes from 'prop-types'

import styles from './Cart.module.css'

const Cart = () => {
   return (
      <div className={styles.cart}>
         <i class="fas fa-shopping-cart fa-2x"></i>
         <div className={styles.quantity}>
            <p>0</p>
         </div>
      </div>
   )
}

Cart.propTypes = {

}

export default Cart
