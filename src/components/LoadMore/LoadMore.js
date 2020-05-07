import React, { useContext } from "react"
import EbuyContext from "../../context/ebuyContext"

import styles from "./LoadMore.module.css"

const LoadMore = () => {
  const { searchProduct } = useContext(EbuyContext)

  const handleClick = e => {
    searchProduct()
  }
  return (
    <div className={styles.loadMore}>
      <button onClick={handleClick}>Load more</button>
    </div>
  )
}

export default LoadMore
