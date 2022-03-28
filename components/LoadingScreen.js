import styles from "./LoadingScreen.module.css";

export const LoadingScreen = ({ loadingMessage }) => (
  <div className={styles.wrapper}>
    <h1>{loadingMessage}</h1>
  </div>
);
