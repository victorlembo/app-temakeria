import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Plate } from "../../components/Plate";
import { Footer } from "../../components/Footer";
import { styles } from "./style";

export function Products() {
  return (
    <View style={styles.products}>
      <Header />
      <Tag />
      <Plate />
      <Footer />
    </View>
  );
}
