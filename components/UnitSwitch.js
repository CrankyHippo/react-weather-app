import styles from "./UnitSwitch.module.css";
import Button from "@mui/material/Button";

export const UnitSwitch = ({ onClick, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.active : styles.inactive
        }`}
        onClick={onClick}
      >
        <Button
          style={{
            borderRadius: 15,
            backgroundColor: "#00acc1",
            padding: "12px 12px",
            fontSize: "18px",
          }}
          variant="contained"
        >
          F° or C°
        </Button>
      </p>
    </div>
  );
};
