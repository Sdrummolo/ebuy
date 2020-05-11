import React, { useContext } from "react"
import uuid from "react-uuid"
import { Waypoint } from "react-waypoint"
import SingleProduct from "./SingleProduct/SingleProduct"
import PropTypes from "prop-types"
import styles from "./Products.module.css"
import EbuyContext from "../../../context/ebuyContext"

const Products = ({ results }) => {
  const { searchProduct } = useContext(EbuyContext)

  return (
    <section className={styles.products}>
      {results.map((product, i) => {
        const id = uuid()
        product.id = id
        return (
          <React.Fragment key={i}>
            <SingleProduct data={product} />
            {id === results[results.length - 1].id && <Waypoint onEnter={() => searchProduct()} />}
          </React.Fragment>
        )
      })}
    </section>
  )
}

Products.propTypes = {
  results: PropTypes.array.isRequired,
}

export default Products
