import React from "react"
import SingleProduct from "./SingleProduct/SingleProduct"
import PropTypes from "prop-types"

import styles from "./Products.module.css"

const { uuid } = require("uuidv4")

const Products = ({ results }) => {
  return (
    <section className={styles.products}>
      {results.map((product) => (
        <SingleProduct data={product} key={product.itemId[0]} />
      ))}
    </section>
  )
}

Products.propTypes = {
  results: PropTypes.array.isRequired,
}

export default Products
