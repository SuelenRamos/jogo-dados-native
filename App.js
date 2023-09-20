import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Dado from './Dados'

const App = () => {
  const [dado1Value, setDado1Value] = useState(1)
  const [dado2Value, setDado2Value] = useState(1)
  const[result, setResult] = useState('')
}

const jogarDado = () => {
  const novoDado1Value = Math.floor(Math.random()*6+1)
  const novoDadoDado2Value = Math.floor(Math.random()*6 +1)
  const soma = novoDado1Value+novoDadoDado2Value

  setDado1Value(novoDado1Value)
  setDado2Value(novoDadoDado2Value)

  if (soma>7){
    setResult('Ganhou!')
  }else{
    setResult('Perdeu!')
  }
}

return (
  <View>
    <Text>Jogue os dados:</Text>
    <Dado value={dado1Value}/>
    <Dado value={dado2value}/>
    <Text>{result}</Text>
    <Button title="Jogar" onPress = {jogarDado}></Button>
  </View>
)

export default App

