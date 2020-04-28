import React, { useState } from 'react'

import DateTimePickerModal from "react-native-modal-datetime-picker"

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Button,
  Title,
  Input,
  Back,
  ContaineDate,
  ContainerItemDate
} from './styles'

import { formatDate } from '../../utils/formatDate'

export default function Details({ navigation }) {

  const [valueTask, setValueTask] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDate, setShowDate] = useState('')
  const [showTime, setShowTime] = useState('')
  const [typeModal, setTypeModal] = useState('')



  const showDatePicker = () => {
    setTypeModal('date')
    setDatePickerVisibility(true)
  }

  const showTimePicker = () => {
    setTypeModal('time')
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    const dateFormated = formatDate(date)
    const onlyDate = dateFormated.split(' ')[0]
    const onlyTime = dateFormated.split(' ')[3]
    hideDatePicker()

    if (typeModal === 'date') {
      setShowDate(onlyDate)
    }

    if (typeModal === 'time') {
      setShowTime(onlyTime)
    }

  }

  async function headleSaveTask() {

    const data = {
      valueTask,
      date: showDate,
      time: showTime
    }

    if (valueTask === '') {
      alert('Insire uma tarefa')
      return
    }
    if (showDate === '') {
      alert('Selecione uma data')
      return
    }
    if (showTime === '') {
      alert('Selecione a hora')
      return
    }


    //enviar pro banco de dados
    try {

      const list = await AsyncStorage.getItem('@storage_Key')
      if (list !== null) {
        const newList = JSON.parse(list)

        await AsyncStorage.setItem('@storage_Key', JSON.stringify([...newList, data]))
      } else {

        await AsyncStorage.setItem('@storage_Key', JSON.stringify([data]))
        alert('Tarefa criada com sucesso')
      }
    }
    catch (e) {
      alert("Erro: Falha ao enviar")
    }


    //limpar os campus
    setValueTask('')
    setShowDate('')
    setShowTime('')

    return true
  }

  return (
    <Container>
      <Input
        placeholder='Tafera...'
        value={valueTask}
        onChangeText={(text) => setValueTask(text)}
      />
      <ContaineDate>
        <ContainerItemDate>
          <Title>Selecione a data</Title>
          <Icon
            style={{ marginLeft: 10 }}
            onPress={showDatePicker}
            name={'date-range'}
            size={35}
            color="#ff0000"
          />
        </ContainerItemDate>
        <Title>{showDate}</Title>
        <ContainerItemDate>
          <Title>Selecione a hora</Title>
          <Icon
            style={{ marginLeft: 10 }}
            onPress={showTimePicker}
            name={'access-time'}
            size={35}
            color="#ff0000"
          />
        </ContainerItemDate>
        <Title>{showTime}</Title>
      </ContaineDate>

      <Button
        onPress={() => headleSaveTask()}
      >
        <Title>Criar</Title>
      </Button>

      <Back onPress={() => { navigation.navigate('Home') }}>
        <Title>Voltar</Title>
      </Back>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={typeModal}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </Container>
  );
}
