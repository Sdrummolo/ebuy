import React, { useContext } from "react"
import PropTypes from "prop-types"

import styles from "./SingleProduct.module.css"
import ebuyContext from "../../../../context/ebuyContext"

const Product = ({ data }) => {
  const { addProductToCart, removeProductFromCart } = useContext(ebuyContext)
  const title = data.title[0]
  const image = data.galleryURL[0]
  const price = `€ ${Number(data.sellingStatus[0].convertedCurrentPrice[0]["__value__"]).toFixed(
    2
  )}`
  const id = data.itemId[0]
  const { isInCart } = data

  const handleClick = e => {
    isInCart ? removeProductFromCart(id) : addProductToCart(id)
  }

  return (
    <div className={styles.singleProduct}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <h3 className={styles.price}>{price}</h3>
      </div>
      {isInCart ? (
        <button className={styles.addButton} onClick={handleClick} style={{ background: "red" }}>
          Remove item
        </button>
      ) : (
        <button className={styles.addButton} onClick={handleClick}>
          Add to cart
        </button>
      )}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Product
