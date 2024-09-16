import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {numero: 0, 
      controller: 'VAI'};
    // timer do relogio
    this.relogio = null;
    this.comecarCount = this.comecarCount.bind(this);
    this.limparCount = this.limparCount.bind(this);
  }

  limparCount(){
    if (this.relogio != null) {
      clearInterval(this.relogio);
      this.relogio = null;
    }
    this.setState({
      numero: 0,
      controller: 'VAI'
    })
  }
  
  comecarCount(){
    if(this.relogio != null){
      clearInterval(this.relogio)
      this.relogio = null
      this.setState({
        controller: 'VAI'
      })
    }else{
      this.relogio = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({
        controller: 'PARAR'
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image  
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        
        <View style={styles.btnArea}>
        
          <TouchableOpacity onPress={this.comecarCount} style={styles.btn}>
            <Text style={styles.btnTexto}>{this.state.controller}</Text>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={this.limparCount} style={styles.btn}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  cronometro:{
    width: 260,
    height: 310,
  },
  timer:{
    marginTop: -160,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 160,
    height: 40,
  },
  btn:{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
});

export default App;