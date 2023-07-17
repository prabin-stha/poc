import { DiamondFrameImage } from "./components/diamond-frame-image";
import styles from "./styles.module.css";
import DiamondImage from "../img/diamond.jpg";

export function DiamondCard() {
  return (
    <div className={styles.card}>
      <DiamondFrameImage
        fallback={
          <img src={DiamondImage} style={{ height: "100%", width: "100%" }} />
        }
      />
    </div>
  );
}
