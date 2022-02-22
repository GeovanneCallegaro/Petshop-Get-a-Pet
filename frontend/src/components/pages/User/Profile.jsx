import { Input } from './../../form/Input';
import formStyles from './../../form/Form.module.css'
import styles from './Profile.module.css'
import { useState, useEffect } from 'react';
import api from '../../../utils/api'



export function Profile() {
  const [user, setUser] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {

    api.get('users/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setUser(response.data)
    })

  }, [token])

  function handleChange() {

  }

  function onFileChange() {

  }

  return (
    <section>
      <div className={styles.profile_container}>
        <h1>{user.name}</h1>
        <p>Preview Imagem</p>
      </div>
      <form className={formStyles.form_container}>
        <Input
          text='Imagem'
          type='file'
          name='image'
          handleOnChange={onFileChange}
        />

        <Input
          text='E-mail'
          type='email'
          name='email'
          placeholder="Digite seu e-mail"
          handleOnChange={handleChange}
          value={user.email || ''}
        />

        <Input
          text='Nome'
          type='text'
          name='name'
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          value={user.name || ''}
        />

        <Input
          text='Telefone'
          type='text'
          name='phone'
          placeholder="Digite seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ''}
        />

        <Input
          text='Senha'
          type='password'
          name='password'
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
          value={user.password|| ''}
        />

        <Input
          text='Confirme sua senha'
          type='password'
          name='confirmPassword'
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Editar"/>
      </form>
    </section>
  )
}
