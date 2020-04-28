import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { FlatList } from 'react-native'

import {
  Container,
  Text,
  Avatar,
  Header,
  ContainerTexts,
  ContainerChild,
  ProgressBar,
  Progress,
  ContainerList,
  ContainerItem,
  ItemText,
  FloatButton,
  ContainerMessage,
  ImageRobot
} from './styles';

import avatar from '../../assets/avatar.png'
import robot from '../../assets/robot.png'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { formatDate } from '../../utils/formatDate'



export default function Today() {

  const navigation = useNavigation();

  const [listTasks, setListTasks] = useState([])
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState('')

  async function handleCheck(index) {
    const list = listTasks.map((tasks, position) => {
      if (position === index) {
        tasks.check = !tasks.check
      }
      return tasks
    })

    calculateProgress(list)

    await AsyncStorage.setItem('@storage_Key', JSON.stringify([list]))
    setListTasks(list)
  }

  const today = formatDate(new Date())

  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      getData()
    });

    return unsubscribe;

  }, [navigation])

  getData = async () => {
    try {
      const userResponse = AsyncStorage.getItem('@user')
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        const list = JSON.parse(value)

        calculateProgress(list)

        setListTasks(list)
      }

      if (userResponse) {
        setUser(userResponse)
      }

    } catch (e) {
      alert('Erro: Erro na verificação dos dados')
    }
  }

  function calculateProgress(list) {
    const listCheck = list.filter((tasks) => tasks.check)
    const totalProgress = (listCheck.length * 100) / list.length
    setProgress(totalProgress.toFixed(2))

  }

  return (
    <Container>
      <ContainerChild>
        <Header>
          <ContainerTexts>
            <Text size={'20px'}>{`Olá, ${user}`}</Text>
            <Text>{today.toString().split()}</Text>
          </ContainerTexts>
          <Avatar source={avatar} />
        </Header>
        <ProgressBar>
          <Progress progress={`${progress}%`} />
          <Text size={"10px"} color={'#333'}>{`${progress}%`}</Text>
        </ProgressBar>
        <ContainerList>
          {listTasks.length === 0 ?
            (
              <>
                <ImageRobot source={robot} />
                <ContainerMessage>
                  <Text>Nenhuma tarefa encotrada</Text>
                </ContainerMessage>
              </>
            )
            : (
              <FlatList
                keyExtractor={(item, index) => String(index)}
                marginBottom={20}
                data={listTasks}
                renderItem={({ item, index }) => (
                  <ContainerItem>
                    <ItemText>
                      <Text size={'20px'} color="#333">{item.valueTask}</Text>
                      <Text size={'12px'} color="#CACACA">{item.date}</Text>
                      <Text size={'12px'} color="#CACACA">{item.time}</Text>
                    </ItemText>

                    <Icon
                      color={'#ff0000'}
                      size={35}
                      name={item.check ? 'check-box' : 'check-box-outline-blank'}
                      onPress={() => handleCheck(index)}
                    />
                  </ContainerItem>
                )}
              />
            )
          }
        </ContainerList>

        <FloatButton onPress={() => navigation.navigate('Details')}>
          <Icon
            name="add"
            size={50}
            color="#fff"
          />
        </FloatButton>
      </ContainerChild>
    </Container>
  );
}
