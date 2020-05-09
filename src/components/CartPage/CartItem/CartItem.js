import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"

import styles from "./CartItem.module.css"
import ebuyContext from "../../../context/ebuyContext"

const CartItem = ({ product }) => {
  const { changeQuantity, removeProductFromCart } = useContext(ebuyContext)
  const [value, setValue] = useState(product.quantity)
  const { galleryURL, title, location, condition, sellingStatus } = product
  const price = (sellingStatus[0].currentPrice[0]["__value__"] * value).toFixed(2)

  const handleChange = e => {
    setValue(Number(e.target.value))
  }

  const handleDelete = e => {
    removeProductFromCart(product.id)
  }

  useEffect(() => {
    changeQuantity(product.id, value)
  }, [value])

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={galleryURL[0]} alt={title[0]} />
      </div>

      <div className={styles.description}>
        <div className={styles.infos}>
          <h4 className={styles.title}>{title[0]}</h4>
          <small>Sent from: {location[0]}</small>
          <small>Condition: {condition[0]["conditionDisplayName"][0]}</small>
        </div>

        <div className={styles.manage}>
          <select onChange={handleChange} value={value}>
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
            <option value="6">Qty: 6</option>
            <option value="7">Qty: 7</option>
            <option value="8">Qty: 8</option>
            <option value="9">Qty: 9</option>
            <option value="10">Qty: 10</option>
          </select>
          <small onClick={handleDelete}>Delete</small>
        </div>
      </div>

      <div className={styles.price}>
        <span className={styles.euro}>€</span>
        {price}
      </div>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CartItem
