import React from "react"
import Logo from "./Logo/Logo"
import Search from "./Search/Search"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <Search />
      </div>
    </header>
  )
}

export default Header
