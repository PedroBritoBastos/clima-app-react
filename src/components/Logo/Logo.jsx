import "../../globals.css";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={`container ${styles["container"]}`}>
      <h1 className={`heading-lg ${styles["title"]}`}>Clima App</h1>
      <p className={styles["developedby"]}>Desenvolvido por Pedro Bastos</p>
    </div>
  );
};
