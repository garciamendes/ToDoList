import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
  background-color: #333;
  flex: 1;
  padding: 12px;
`

export const ContainerChild = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`

export const ContainerTexts = styled.View`
  flex: 5;
`

export const Text = styled.Text`
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.size || '16px'};
`

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 50px;
`

export const ProgressBar = styled.View`
  background-color: white;
  width: 100%;
  height: 10px;
  flex-direction: row;
  align-content: center;
`

export const Progress = styled.View`
  background-color: red;
  width: ${(props) => props.progress || 0};
  height: 10px;
`

export const ContainerList = styled.View`
  margin-top: 20px;
`

export const ContainerItem = styled.View`
  background: #fff;
  width: 95%;
  height: 70px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ItemText = styled.View`
  flex-direction: column;
`

export const FloatButton = styled.TouchableOpacity`
  background: #ff0000;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-width: 2px;
  border-color: red;
  border-radius: 50px;
  bottom: 5px;
  right: 5px;
  position: absolute;
  justify-content: center;
  align-items: center;
`

export const ImageRobot = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10%;
  margin-top: 30%;
`
export const ContainerMessage = styled.View`
  border: 1px solid #fff;
  border-radius: 4px;
  height: 40px;
  width: 200px;
  right: 0;
  top: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
`