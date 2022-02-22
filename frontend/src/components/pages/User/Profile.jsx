import { Input } from './../../form/Input';
import formStyles from './../../form/Form.module.css'
import styles from './Profile.module.css'
import { useState, useEffect } from 'react';
import api from '../../../utils/api'
import { useFlashMessage } from './../../../hooks/useFlashMessage';



export function Profile() {
  const [user, setUser] = useState({})
  const [preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token') || '')
  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {

    api.get('users/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setUser(response.data)
    })

  }, [token])

  function handleChange(e) {
    setUser({...user, [e.target.name]: e.target.value })
  }

  function onFileChange(e) {
    setPreview(e.target.files[0])
    setUser({...user, [e.target.name]: e.target.files[0]})
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let messageType = 'sucess'

    const formData = new FormData()

    await Object.keys(user).forEach((key) => {
      formData.append(key, user[key])
    })

    const data = await api.patch(`/users/edit/${user._id}`, formData, {
      headers: {
        Authorization: `Bearer: ${JSON.parse(token)}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      return response.data
    }).catch((error) => {
      messageType = 'error'
      return error.response.data
    })

    setFlashMessage(data.message, messageType)
  }

  return (
    <section>
      <div className={styles.profile_container}>
        <h1>{user.name}</h1>
        {(user.image || preview) && (
          <img src={preview ? URL.createObjectURL(preview) : `http://localhost:5000/images/users/${user.image}`} alt={user.name} />
        )}
      </div>
      <form className={formStyles.form_container} onSubmit={handleSubmit}>
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
