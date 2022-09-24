import React from 'react';
//importando os componentes View e Text
import { ScrollView, Text, StyleSheet } from 'react-native';

// função
export default function Cartilha() {
return (
<ScrollView>
  <Text style={styles.tituloConteudo}>
      Cartilha de Prevenção ao Suicídio 

      <Text style={styles.textRegister}> ─────────────────────────────</Text> 

  </Text>
  <Text style={styles.conteudo}>
           <Text style={{fontWeight: "bold"}}> 
            1.0 Transtornos Mentais:  </Text>     
    você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? 
    Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas <Text style={{fontWeight: "bold"}}> (álcool, maconha, crack e cocaína, por exemplo)</Text>, 
    esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento 
    dos trastornos mentais pelo médico psiquiatra estão 
    entre os principais fatores de proteção na prevenção do suicídio.
  </Text>
  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>

  <Text style={styles.conteudo}>
           <Text style={{fontWeight: "bold"}}> 
            2.0 Historico Pessoal:  </Text>     
    Tentativa prévia é o principal fator de risco para o suicídio.
  </Text>

  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>

  <Text style={styles.conteudo}>
           <Text style={{fontWeight: "bold"}}> 
            3.0 Ideação suicida:  </Text>     
    Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestações 
    de uma Ideação suicida. Atenção as expressões como "Eu não queria ter nascido"


  </Text>

  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>

  <Text style={styles.conteudo}>
           <Text style={{fontWeight: "bold"}}> 
            4.0 Fatores estressores crônicos e recentes:  </Text>     
    eventos estressantes significativos, como separação conjugal ou perda de uma pessoa proxima, além daqueles que levem a prejuizos
    economicos e social, como falência e perda do emprego.

    
  </Text>
  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>
  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>

  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>

  <Text style={styles.tituloConteudo}> ─────────────────────────────</Text>



  


  
  
</ScrollView>


)
}

const styles = StyleSheet.create({
  
  tituloConteudo: {
  // formatação de titulo de conteudo
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 1,
    color: 'white'
  },

  conteudo: {
  // formatação de titulo de conteudo
    flex: 1,
    fontSize: 16,
    padding: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    backgroundColor:'white'
  },
  container:{
    paddingTop: 10,
    flex:1,
    backgroundColor:'white',
    }

} );