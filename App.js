// Importando o React e o Componente.
import React, {Component} from 'react';

// Importando os elementos a serem utilizados.
import {Button, Text, View, Alert} from 'react-native';

// Criei uma função para gerar números aleatórios.
const gerarNumeroAleatorio = () =>{
  let numero = Math.random();
  numero = Math.floor(numero * 10);
  
  // Alert é utilizado para exibir informações em forma de alerta.
  Alert.alert("Número Gerado",`${numero}`);
}
export default class App extends Component {
  // BUTTON- Utilizando o onPress para chamar uma função quando tocar no botão com o nome "Gerar Número".
  render() {
    return (
      <View>
        <Button title="Gerar número" onPress={gerarNumeroAleatorio}/>
      </View>
    );
  }
}