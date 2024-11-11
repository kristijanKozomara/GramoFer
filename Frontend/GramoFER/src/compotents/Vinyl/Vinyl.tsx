import styles from "./Vinyl.module.css";
import React from "react";
interface VinylProps {
  vinyl_genre: string;
}
const Vinyl: React.FC<VinylProps> = ({ vinyl_genre }) => {
  return (
    <div className={[styles.vinylBox, styles[vinyl_genre]].join(" ")}>
      <h2>Naslov ploče</h2>
      <div className={styles.row}>
        <img src="/images/vinyl_blue.png" alt="image" />
        <div className={styles.column}>
          <button>DETALJI</button>
          <button className={styles.button_zamjena}>PONUDI ZAMJENU</button>
        </div>
      </div>
    </div>
  );
};
export default Vinyl;
