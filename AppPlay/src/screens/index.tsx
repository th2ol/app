import React from 'react';
import { View, Text, TextInput } from "react-native";
import { styles } from './styles'
import React, { useState } from 'react';

export function SingnIn() {
  const [text, setText] = useState ("Você não digitou nada ainda");

  return(
    <View style={styles.container}>
      <TextInput style={styles.input} />

      <Text>
        Você digitou: {text}
      </Text>
    </View>
  );
}