import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <div className={[styles.main_column, styles.row].join(" ")}>
        <h1>GramoFER</h1>
      </div>
      <div
        className={[styles.main_column, styles.row, styles.site_links].join(
          " "
        )}
      >
        <div>
          <h3>MOJE PLOČE</h3>
        </div>
        <div>
          <h3>PONUDE</h3>
        </div>
        <div>
          <h3>MOJE ZAMJENE</h3>
        </div>
      </div>
      <div className={(styles.main_column, styles.row)}>
        <h3>Korisničko ime</h3>
        <button>PRIJAVA</button>
      </div>
    </div>
  );
}
export default Header;
