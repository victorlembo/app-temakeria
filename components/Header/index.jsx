import React from "react";
import { View, Text } from "react-native";
import {styles} from "./style";
import {MotiView} from 'moti'

export function Header() {
  return (
    <MotiView
    from={{ opacity: 0, scale: 1.5 }}
    animate={{ opacity: 1, scale: 1  }}
    transition={{
      type: "timing",
    }}
    duration={2000}
    delay={1000}
  >
    <View style={styles.container}>
      <Text style={styles.title}>iFome 手巻き</Text>
      <Text style={styles.subtitle}>Temakeria</Text>
    </View>
    </MotiView>
  );
}

export default Header;