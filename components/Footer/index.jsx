import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Button } from "../Button";

export function Footer() {
  return (
    <View>
      <Text style={styles.title}>Temaki Salmão</Text>
      <Text style={styles.description}>
        Nori, Arroz e Salmão. Acompanha cebolinha fresca
      </Text>
      <View style={styles.footerPrice}>
        <Text style={styles.price}>R$ 34.90</Text>
        <Button />
      </View>
    </View>
  );
}

export default Footer;
