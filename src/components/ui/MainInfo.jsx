import styles from "./MainInfo.module.css";

export const MainInfo = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
