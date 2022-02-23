import styles from './AddPets.module.css'

import api from '../../../utils/api'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

/* hooks */
import { useFlashMessage } from '../../../hooks/useFlashMessage'

/* components */
import { PetForm } from '../../form/PetForm'

export function AddPet() {
  const [token] = useState(localStorage.getItem('token') || '')
  const {setFlashMessage} = useFlashMessage()
  const history = useHistory()

  async function registerPet(pet) {
    let messageType = 'sucess'

    const formData = new FormData()

    await Object.keys(pet).forEach((key) => {
      if(key === 'images') {
        for(let i = 0; i < pet[key].length; i++) {
          formData.append('images', pet[key][i])
        }
      } else {
        formData.append(key, pet[key])
      }
    })

    const data = await api.post('pets/create', formData, {
      Authorization: `Bearer ${JSON.parse(token)}`,
      'Content-Type': 'multipart/form-data'
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      messageType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, messageType)

    if(!messageType !== 'error') {
      history.push('/pet/mypets')
    }
  }

  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
        <PetForm btnText='Cadastrar Pet' handleSubmit={registerPet}/>
    </section>
  )
}
