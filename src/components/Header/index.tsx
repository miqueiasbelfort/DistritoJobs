import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className={styles.container}>
      <Link to={"/jobs"}>
        <img className={styles.logo} src="../../src/assets/DistritoJOBS-logo.svg" alt="DistritoJobs" />
      </Link>
      <ul className={styles.list}>
        <li>
          <Link to={"/jobs"}>Vagas</Link>
        </li>
        <li className={styles.linkWithImg}>
          <Link to={"/profile"}>Miqueias</Link>
          <img src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Miqueias" />
        </li>
      </ul>
    </nav>
  )
}

export default Header