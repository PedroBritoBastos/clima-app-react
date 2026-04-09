import styles from "./InfoIcon.module.css";

export const InfoIcon = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
