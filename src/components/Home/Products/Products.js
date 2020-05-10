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
    <>
      <section className={styles.products}>
        {results.map(product => {
          const id = uuid()
          product.id = id
          return (
            <React.Fragment key={id}>
              <SingleProduct data={product} />
              {id === results[results.length - 1].id ? (
                <Waypoint onEnter={() => searchProduct()} />
              ) : null}
            </React.Fragment>
          )
        })}
      </section>

      {/* Need one more element in order to trigger the waypoint*/}
      <div style={{ height: 1 }}></div>
    </>
  )
}

Products.propTypes = {
  results: PropTypes.array.isRequired,
}

export default Products
