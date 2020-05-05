import React, { useState, useContext } from "react"

import EbuyContext from "../../../context/ebuyContext"
import styles from "./Search.module.css"

const Search = (props) => {
  const { searchProduct } = useContext(EbuyContext)
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchProduct(input)
    setInput("")
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search a product..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="fa fa-search fa-lg" />
      </button>
    </form>
  )
}

export default Search
