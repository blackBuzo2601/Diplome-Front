import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.form}>
        <p className={styles.prueba}>Inicio sesión</p>
      </div>
    </div>
  );
}
