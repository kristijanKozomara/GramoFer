import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <div className={[styles.main_column, styles.row].join(" ")}>
        <h1>GramoFER</h1>
      </div>
      <div></div>
      <div
        className={[styles.main_column, styles.row, styles.site_links].join(
          " "
        )}
      >
        <div>
          <h2>Ponude</h2>
        </div>
        <div>
          <h2>Moje ploče</h2>
        </div>
        <div>
          <h2>Moje zamjene</h2>
        </div>
      </div>
    </div>
  );
}
export default Header;
