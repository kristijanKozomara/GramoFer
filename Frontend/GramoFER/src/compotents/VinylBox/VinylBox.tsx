import styles from "./VinylBox.module.css";
import Vinyl from "../Vinyl/Vinyl";
import React from "react";
interface Vinyl_color {
  by_genre: boolean;
  color: string;
}
const VinylBox: React.FC<Vinyl_color> = ({ by_genre, color }) => {
  let number = 0;
  let V_count = 0;
  if (by_genre) {
    switch (color) {
      case "Rock":
        number = 1;
        V_count = 4;
        break;
      case "Blues":
        number = 2;
        V_count = 12;
        break;
      case "Pop":
        number = 3;
        V_count = 7;
        break;
      default:
        number = 1;
        V_count = 5;
    }
  } else {
    V_count = 5;
  }
  let vinylclass = `vinylBox_${number.toString()}`;

  return (
    <>
      <div className={styles.filter_row}>
        {Array.from({ length: V_count }).map((_, index) => {
          if (by_genre) {
            vinylclass = `vinylBox_${number}`;
          } else {
            const randomColor = Math.floor(Math.random() * 3) + 1;
            vinylclass = `vinylBox_${randomColor}`;
          }

          return <Vinyl key={index} vinyl_genre={vinylclass} />;
        })}
      </div>
    </>
  );
};
export default VinylBox;
