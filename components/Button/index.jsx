import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './style';
import { theme } from "../../themes";

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.8}
    >
      <Text style={styles.buttonText}>
        Comprar
      </Text>

      <Feather
        name="shopping-cart"
        size={24}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
}