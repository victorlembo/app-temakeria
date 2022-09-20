import plateImage from "../../assets/temaki-salmao.png";
import { styles } from "./style";
import { MotiImage } from "moti";

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImage}
      resizeMode="contain"
      from={{ opacity: 0, translateX: 64 }}
      animate={{ opacity: 1, translateX: 4 }}
      transition={{
        type: "timing",
        duration: 3000,
      }}
    />
  );
}
