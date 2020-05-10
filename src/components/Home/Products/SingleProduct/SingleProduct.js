import React, { useContext } from "react"
import PropTypes from "prop-types"

import styles from "./SingleProduct.module.css"
import ebuyContext from "../../../../context/ebuyContext"

const Product = ({ data }) => {
  const { addProductToCart, removeProductFromCart } = useContext(ebuyContext)
  const { quantity, id } = data
  const title = data.title[0]
  let image
  try {
    image = data.galleryURL[0]
  } catch (e) {
    console.log(e)
    image = null
  }
  const price = `€ ${Number(data.sellingStatus[0].convertedCurrentPrice[0]["__value__"]).toFixed(
    2
  )}`

  const handleClick = e => {
    quantity ? removeProductFromCart(id) : addProductToCart(id)
  }

  return (
    <div className={styles.singleProduct}>
      <div className={styles.img}>{image ? <img src={image} alt={title} /> : null}</div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <h3 className={styles.price}>{price}</h3>
      </div>
      {quantity ? (
        <button className={styles.button} onClick={handleClick}>
          Remove item
        </button>
      ) : (
        <button className={styles.button} style={{ background: "#45ba5b" }} onClick={handleClick}>
          Add item to cart
        </button>
      )}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Product
