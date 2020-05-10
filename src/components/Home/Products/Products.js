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
            <>
              <SingleProduct data={product} key={id} />
              {id === results[results.length - 1].id ? (
                <Waypoint onEnter={setTimeout(() => searchProduct, 1000)} />
              ) : null}
            </>
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
