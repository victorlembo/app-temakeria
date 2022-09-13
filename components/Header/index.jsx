import React from "react";
import { View, Text } from "react-native";
import {styles} from "./style";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iFome 手巻き</Text>
      <Text style={styles.subtitle}>Temakeria</Text>
    </View>
  );
}

export default Header;