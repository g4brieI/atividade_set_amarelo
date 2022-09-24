import * as React from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

import Cartilha from './componente/Cartilha';


export default function App() {
  return (
    <ScrollView style={styles.container}>
         <Image 
         style={styles.logo}
   // source={require('./assets/setembro-amarelo.png')
    source={require('./assets/set.png')} 
  /> 
      <Text style={styles.titulo}>
        Setembro Amarelo
      </Text>

          <View style={styles.tituloConteudo}>
           
            <Cartilha/>
            
          </View>


    </ScrollView>
  );

}


const styles = StyleSheet.create({

 //////////////////////////////////////////////////////////////////////// 
  container: {
    // flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    //padding: 1,
  },
///////////////////////////////////////////////

//////////////////////////////////////////////
  logo:{
// FORMATAÇÃO DA LOGO
  //  width: 400,
    alignItems: 'center',
  //  height: 200,
    resizeMode: 'center'},
///////////////////////////////////////////////

//////////////////////////////////////////////////////////
  titulo: {
    // FORMATAÇÃO DO TITULO
   fontSize: 20,
    textAlign: 'center',
    margin: 10,
   // fontFamily: 'Open Sans',
    fontWeight:'800',
    color: 'yellow'
  },
  ////////////////////////////////////////////////////////////////
  tituloConteudo: {
  // formatação de titulo de conteudo
    fontSize: 18,
    fontWeight: '1000',
    textAlign: 'center',
    margin: 8,
  }
  ////////////////////////////////////////////
});
