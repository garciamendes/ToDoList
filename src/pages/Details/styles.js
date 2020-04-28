import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #333;
  flex: 1;
  padding: 20px;
  align-items: center;
`

export const ContaineDate = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: flex-start;
`
export const ContainerItemDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`

export const Input = styled.TextInput.attrs({
  multiline: true,
})`
  width: 100%;
  min-height: 50px;
  padding-left: 10px;
  background: #fff;
  border-radius: 8px;
`

export const Button = styled.TouchableOpacity`
  width: 75%;
  height: 60px;
  background: #ff0000;
  border-radius: 8px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`

export const Back = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background: #ff0000;
  border-radius: 8px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`