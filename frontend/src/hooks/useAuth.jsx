import api from '../utils/api';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFlashMessage } from './useFlashMessage';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const { setFlashMessage } = useFlashMessage()
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      api.defaults.headers.Authorization  = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
  }, [])

  async function register(user) {
    let messageText = 'Cadastro realizado com sucesso!'
    let messageType = 'sucess'

    try {

      const data = await api.post('users/register', user).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch (error) {

      messageText = error.response.data.message
      messageType = 'error'
    }

    setFlashMessage(messageText, messageType)

  }

  async function login(user) {
    let messageText = 'Login realizado com sucesso!'
    let messageType = 'sucess'

    try {

      const data = await api.post('/users/login', user).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch (error) {
      messageText = error.response.data.message
      messageType = 'error'
    }
    setFlashMessage(messageText, messageType)
  }

  async function authUser(data) {
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))
    history.push('/')
  }

  function logout() {
    const messageText = 'Logout realizado com sucesso!'
    const messageType = 'sucess'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    history.push('/')

    setFlashMessage(messageText, messageType)
  }

  return { register, authenticated, logout, login }
}




