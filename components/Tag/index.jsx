import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { styles } from "./style";
import { theme } from "../../themes";

export function Tag() {
  return (
    <View style={styles.container}>
      <Feather name="tag" color={theme.colors.white} size={26} />

      <View style={styles.info}>
        <Text style={styles.text}>Calorias</Text>

        <Text style={styles.value}>430</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Peso</Text>

        <Text style={styles.value}>190g</Text>
      </View>
    </View>
  );
}
