import React, { useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Logo,
  Text,
  Input,
  Button,
  Form
} from './styles';

import logo from '../../assets/logo.png'

export default function Login({ navigation }) {

  const [valueUser, setValueUser] = useState('')
  const [valuePass, useValuePass] = useState('admin@123')

  async function handleButtomEnter() {
    if (verify()) {
      await AsyncStorage.setItem('@user', valueUser)
      navigation.navigate('Home')
    }
  }

  function verify() {
    if (valueUser.length === 0 || valuePass.length === 0) {
      alert("Necessario preencher todos os campus!!!")
      return false
    }

    if (valuePass.length < 6) {
      alert("Tamanho minimo de digitos é 6 caracteres")
      return false
    }

    if (valuePass !== 'admin@123') {
      alert('senha incorreta')
      return false
    }

    return true
  }

  return (
    <Container>
      <Logo source={logo} />
      <Text>MyToDoList</Text>

      <Form>
        <Input
          placeholder='Username'
          value={valueUser}
          onChangeText={(text) => setValueUser(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          value={valuePass}
          onChangeText={(text) => useValuePass(text)}
        />

        <Button onPress={handleButtomEnter}>
          <Text>Entrar</Text>
        </Button>
      </Form>

    </Container>
  );
}
