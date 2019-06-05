import React, {Component} from 'react';
import {Button, Text, View, Alert} from 'react-native';

const gerarNumeroAleatorio = () =>{
  let numero = Math.random();
  numero = Math.floor(numero * 10);
  Alert.alert("Número Gerado",`${numero}`);
}
export default class App extends Component {
  render() {
    return (
      <View>
        <Button title="Gerar número" onPress={gerarNumeroAleatorio}/>
      </View>
    );
  }
}