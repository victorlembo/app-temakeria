import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";
import { theme } from "../../themes";
import {MotiView} from 'moti'

export function Button() {
  return (
    <MotiView
      from={{ opacity: 0.5, translateY: 24 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "timing",
      }}
      duration={2000}
      delay={1000}
    >
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Comprar</Text>

        <Feather name="shopping-cart" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </MotiView>
  );
}
