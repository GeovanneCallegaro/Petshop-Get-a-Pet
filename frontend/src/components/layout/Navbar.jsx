import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'

export function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Logo do Site"/>
        <h2>Get a Pet</h2>
      </div>
      <ul>
        <li>
          <Link to='/'>Adotar</Link>
        </li>
        <li>
          <Link to='/login'>Registrar-se</Link>
        </li>
        <li>
          <Link to='/register'>Cadastre-se</Link>
        </li>
      </ul>
    </nav>
  )
}
