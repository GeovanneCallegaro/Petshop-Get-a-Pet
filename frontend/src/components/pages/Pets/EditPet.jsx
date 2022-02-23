import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './AddPets.module.css'

import PetForm from '../../form/PetForm'

import { useFlashMessage } from './../../../hooks/useFlashMessage';

export function EditPet() {
  const [pet, setPet] = useState({})

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o pet: {pet.name}</h1>
        <p>Depois da edição os dados serão alterados</p>
      </div>
    </section>
  )
}

