import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { MotiView, useAnimationState } from "moti";

import { styles } from "./style";
import { theme } from "../../themes";

export function Tag() {
  const animatedTag = useAnimationState({
    closed: {
      height: 70,
    },
    opened: {
      height: 230,
    },
  });

  function openTag() {
    animatedTag.transitionTo("opened");
  }
  function closeTag() {
    animatedTag.transitionTo("closed");
  }

  return (
    <MotiView style={styles.container} state={animatedTag}>
      <Pressable onPressIn={openTag} onPressOut={closeTag}>
        <Feather name="tag" color={theme.colors.white} size={26} />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.text}>Calorias</Text>

        <Text style={styles.value}>430</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Peso</Text>

        <Text style={styles.value}>190g</Text>
      </View>
    </MotiView>
  );
}
