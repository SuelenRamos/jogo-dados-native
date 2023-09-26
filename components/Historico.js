import React from 'react';
import { View, Text, FlatList } from 'react-native';
import historicoJogo from './store'; 

const Historico = () => {
  const gameStore = historicoJogo();

  return (
    <View>
      <Text>Histórico de Jogos:</Text>
      <FlatList
        data={gameStore.historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Dado 1: {item.dado1}</Text>
            <Text>Dado 2: {item.dado2}</Text>
            <Text>Resultado: {item.resultado}</Text>
            <Text>--------------------------------</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Historico;
