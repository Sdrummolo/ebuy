import React from "react"
import uuid from "react-uuid"
import SingleProduct from "./SingleProduct/SingleProduct"
import PropTypes from "prop-types"

import styles from "./Products.module.css"

const Products = ({ results }) => {
  return (
    <section className={styles.products}>
      {results.map(product => {
        const id = uuid()
        product.id = id
        return <SingleProduct data={product} key={id} />
      })}
    </section>
  )
}

Products.propTypes = {
  results: PropTypes.array.isRequired,
}

export default Products
