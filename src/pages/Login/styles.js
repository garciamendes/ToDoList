import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
`
export const Form = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.Image`
  height: 15%;
`
export const Text = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
`
export const Input = styled.TextInput`
  color: #000;
  height: 50px;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 15px;
`

export const Button = styled.TouchableOpacity`
  background-color: red;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`
