import api from '../utils/api';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFlashMessage } from './useFlashMessage';

export function useAuth() {
  const { setFlashMessage } = useFlashMessage()

  async function register(user) {
    let messageText = 'Cadastro realizado com sucesso!'
    let messageType = 'sucess'

    try {

      const data = await api.post('users/register', user).then((response) => {
        return response.data
      })

      console.log(data)
    } catch (error) {

      messageText = error.response.data.message
      messageType = 'error'
    }

    setFlashMessage(messageText, messageType)
  }

  return { register }
}




