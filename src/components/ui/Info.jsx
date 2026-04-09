import styles from "./Info.module.css";

export const Info = ({ children }) => {
  return <div className={`${styles["container"]}`}>{children}</div>;
};
