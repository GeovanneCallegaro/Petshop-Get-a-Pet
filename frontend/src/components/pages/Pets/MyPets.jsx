import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

export function MyPets() {
  const [pets, setPets] = useState([])

  return (
    <section>
      <div>
        <h1>My Pets</h1>
        <Link to="/pet/add"> Cadastrar Pet</Link>
      </div>
      <div>
        {pets.length > 0 ?
          <p>Meus pets cadastrados</p> :
          <p>Não há Pets cadastrados!</p>
        }
      </div>
    </section>
  )
}
