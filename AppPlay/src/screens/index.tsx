import React from "react";
import { styles } from './styles';
//import React, { useState } from 'react';
import IllustrationImg from '../assets/illustration.png';
import { View, Text, TextInput, Image, StatusBar, StyleSheet} from 'react-native';


export function SingnIn() {

  return(
    <View style={styles.container}>

          <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent />
        
        <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
    
    <View style= {styles.contant}>
      <Text style={styles.title}>
        Organize Suas {`\n`}
        Jogatinas {`\n`}
        facilmente {`\n`}
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>

    </View>
    </View>
  );
}