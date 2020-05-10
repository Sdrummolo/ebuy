import React, { useState, useEffect } from "react"
import styles from "./Sort.module.css"

const Sort = () => {
  const [value, setValue] = useState("best")

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.sortContainer}>
      <small>Sort:</small>
      <select name="sort" value={value} onChange={handleChange}>
        <option value="best">Best Match</option>
        <option value="lowest">Lowest Price First</option>
        <option value="highest">Highest Price First</option>
      </select>
    </div>
  )
}

export default Sort
