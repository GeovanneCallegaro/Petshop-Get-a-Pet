import api from '../../../utils/api'

import styles from './PetDetails.module.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFlashMessage } from '../../../hooks/useFlashMessage'

export function PetDetails() {
  const [pet, setPet] = useState({})
  const {id} = useParams()
  const {setFlashMessage} = useFlashMessage()
  const [token] = useState(localStorage.getItem('token' || ''))

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet)
    })
  }, [id])

  return (
    <>
      {pet.name && (
        <section>
          <div>
            <h1>Conhcendo o Pet: {pet.name}</h1>
            <p>Se tiver interesse, marque uma visita para conhecê-lo</p>
          </div>
          <div>
            {pet.images.map((image, index) => (
              <img src={`http://localhost:5000/images/pets/${image}`} alt={pet.name} key={index}/>
            ))}
          </div>
          <p>
            <span className="bold">Peso:</span> {pet.weight} kg
          </p>
          <p>
            <span className="bold">Idade:</span> {pet.age} anos
          </p>
          {token ? (
            <button>Solicitar uma visita!</button>
          ) : (
            <p>Você precisa <Link to='/register'>criar uma conta</Link> para solicitar uma visita!</p>
          )}
        </section>
      )}
    </>
  )
}
