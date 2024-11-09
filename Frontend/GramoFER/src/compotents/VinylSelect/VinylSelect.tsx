import styles from "./VinylSelect.module.css";
import VinylBox from "../VinylBox/VinylBox";
function VinylSelect() {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div>
          <label htmlFor="options">Odaberi kategoriju: </label>
          <select id="options" name="options" className={styles.select}>
            <option value="option1">vinyl 1</option>
            <option value="option2">vinyl 2</option>
            <option value="option3">vinyl 3</option>
          </select>
        </div>
        <div className={styles.search}>
          <label htmlFor="search">Pretraži: </label>
          <input type="search" id="search" placeholder="Pretraži..." />
        </div>
      </div>
      <VinylBox></VinylBox>
    </div>
  );
}
export default VinylSelect;
