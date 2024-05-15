import { styles } from './styles';
import React, { useState } from 'react';
import IllustrationImg from '../assets/illustration.png';
import { View, Text, TextInput, Image, StatusBar} from 'react-native';
import { ButtonIcon } from '../components/ButtonIcon';
import { theme } from '../global/styles/theme';

export function SingnIn() {

  return(
    <View style={styles.container}>

      <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent />
        
        <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
    
    <View style= {styles.content}>
      <Text style={styles.title}>
        Organize Suas {`\n`}
        Jogatinas {`\n`}
        facilmente {`\n`}
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>
      <ButtonIcon title="Entrar com Discord"/>
    </View> 
    </View>
  );
}
