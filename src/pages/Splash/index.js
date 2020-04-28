import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { Container, Title, Logo } from './styles'

import logo from '../../assets/logo.png'

export default function Splash({ navigation }) {

  navigateToLogin = async () => {
    try {
      const response = await AsyncStorage.getItem('@user')
      if (response === null) {
        navigation.navigate('Login')
      } else {
        navigation.navigate('Home')
      }

    } catch (e) {
      alert('Erro: Erro na verificação dos dados')
    }
  }

  setTimeout(() => {
    navigateToLogin()
  }, 3000)

  return (
    <Container>
      <Logo source={logo} />
      <Title>MyToDoList</Title>
    </Container>
  );
}
