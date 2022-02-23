import styles from './AddPets.module.css'

import api from '../../../utils/api'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

/* hooks */
import { useFlashMessage } from '../../../hooks/useFlashMessage'

export function AddPet() {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
        <p>Formulário</p>
    </section>
  )
}
