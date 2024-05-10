import { View, Text, Image } from 'react-native';
import { styles } from './styles'
import React, { useState } from 'react';
import IllustrationImg from '../assets/illustration.png';
import { StatusBar } from 'expo-status-bar';

export function SingnIn() {
  const [text, setText] = useState ("Você não digitou nada ainda");

  return(
    <View style={styles.container}>
     <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent />
      <Image source={IllustrationImg} />
    <View style= {styles.contant}>

      <Text style={styles.title}>
        Organize Suas {`/n`}


      </Text>
      <Text style={styles.subtitle}>


      </Text>

    </View>
    </View>
  );
}