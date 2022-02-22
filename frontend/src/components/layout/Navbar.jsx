import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'

import styles from './Navbar.module.css'

/* context */
import { Context } from '../../context/UserContext.jsx'
import { useContext } from 'react'

export function Navbar() {
  const {authenticated, logout}= useContext(Context)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="Logo do Site"/>
        <h2>Get a Pet</h2>
      </div>
      <ul>
        <li>
          <Link to='/'>Adotar</Link>
        </li>
        {authenticated ?
        (
          <>
            <li>
              <Link to='/user/profile'>Meu perfil</Link>
            </li>
            <li onClick={logout}>
              Sair
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Cadastre-se</Link>
            </li>
          </>
        )
        }

      </ul>
    </nav>
  )
}
