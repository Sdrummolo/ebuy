import React, { useContext } from "react"

import EbuyContext from "../../../context/ebuyContext"
import styles from "./Search.module.css"

const Search = props => {
  const { searchProduct, input, setInput } = useContext(EbuyContext)

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    searchProduct(input)
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search a product..."
        value={input}
        onChange={handleChange}
        required
      />
      <button type="submit">
        <i className="fa fa-search fa-lg" />
      </button>
    </form>
  )
}

export default Search
