import { useState, useEffect } from "react"
import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom';

import { RoundedImage } from './../../layout/RoundedImage';
import api from '../../../utils/api'

/* hooks */
import { useFlashMessage } from './../../../hooks/useFlashMessage';

export function MyPets() {
  const [pets, setPets] = useState([])
  const [token] = useState(localStorage.getItem('token' || ''))
  const {setFlashMessage} = useFlashMessage()


  useEffect(() => {
    api.get('/pets/mypets', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setPets(response.data.pets)
    })
  }, [token])

  async function removePet(id) {
    let messageType = 'sucess'

    const data = await api.delete(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      const updatedPets = pets.filter((pet) => pet._id !== id)
      setPets(updatedPets)
      return response.data
    }).catch((err) => {
      messageType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, messageType)
  }

  return (
    <section>
      <div  className={styles.petlist_header}>
        <h1>My Pets</h1>
        <Link to="/pet/add"> Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 ?
          pets.map((pet) => (
              <div key={pet._id} className={styles.petlist_row}>
                <RoundedImage
                  src={`http://localhost:5000/images/pets/${pet.images[0]}`}
                  alt={pet.name}
                  width='px75'
                />
                  <span className="bold">{pet.name}</span>
                  <div className={styles.actions}>
                    {pet.available ? (
                      <>
                        {pet.adopter && (
                          <button className={styles.conclude_btn}>Concluir adoção</button>
                        )}
                        <Link to={`/pet/edit${pet._id}`}>Editar</Link>
                        <button onClick={() => {
                          removePet(pet._id)
                        }}>Excluir</button>
                      </>
                    ) : (
                      <p>Pet já adotado</p>
                    )}
                  </div>
              </div>
          )) :
          <p>Não há Pets cadastrados!</p>
        }
      </div>
    </section>
  )
}
