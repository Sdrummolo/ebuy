import React from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo/Logo"
import Search from "./Search/Search"
import Navbar from "../Navbar/Navbar"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <Search />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
