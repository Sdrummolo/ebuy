import React from "react"
import PropTypes from "prop-types"

import styles from "./NoResults.module.css"

const NoResults = ({ error }) => {
  return <p className={styles.errorText}>No results for "{error}"</p>
}

NoResults.propTypes = {
  error: PropTypes.string.isRequired,
}

export default NoResults
