import {Image} from "react-native";
import plateImage from "../../assets/temaki-salmao.png";
import { styles } from "./style";

export function Plate() {
  return (
    <Image style={styles.plate} source={plateImage} resizeMode="contain" />
  );
}
