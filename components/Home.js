import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Dado from './Dados';
import { NavigationContainer } from '@react-navigation/native';

const Home = ({ navigation }) => { 
  const [dado1Value, setDado1Value] = useState(1);
  const [dado2Value, setDado2Value] = useState(1);
  const [result, setResult] = useState();

  const jogarDado = () => {
    const novoDado1Value = Math.floor(Math.random() * 6 + 1);
    const novoDado2Value = Math.floor(Math.random() * 6 + 1);
    const soma = novoDado1Value + novoDado2Value;

    setDado1Value(novoDado1Value);
    setDado2Value(novoDado2Value);

    if (soma > 7) {
      setResult('Ganhou!');
    } else {
      setResult('Perdeu!');
    }
  };

  return (
    <NavigationContainer> 
      <View>
        <Text>Jogue os dados:</Text>
        <Dado value={dado1Value} />
        <Dado value={dado2Value} />
        <Text>{result}</Text>
        <Button title="Jogar" onPress={jogarDado} />
        <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      </View>
    </NavigationContainer>
  );
};

export default Home;
