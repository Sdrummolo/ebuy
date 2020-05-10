import React from "react"

import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h3>Oooops</h3>
      <h4>This page doesn't exist!</h4>
    </div>
  )
}

export default NotFound
